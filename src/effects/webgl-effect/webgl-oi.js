import * as THREE from 'three';
import gsap from 'gsap';
import { vertexShader, fragmentShader } from './MSDFShader.js';

export class OiWebGL {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.container = document.body;
        this.renderer.domElement.classList.add('oi-canvas');
        Object.assign(this.renderer.domElement.style, {
            position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 100
        });
        this.container.appendChild(this.renderer.domElement);

        this.meshes = [];
        this.fontData = null;
        this.texture = null;

        this.init();
    }

    async init() {
        // 1. Lade Font Assets (Pfade anpassen!)
        const fontJson = await fetch('./assets/fonts/PPNeueMontreal-Medium.json').then(res => res.json());
        const fontTexture = new THREE.TextureLoader().load('./assets/fonts/PPNeueMontreal-Medium.png');

        this.fontData = fontJson;
        this.texture = fontTexture;

        this.createEffect();
        this.animate();
    }

    createEffect() {
        const targets = document.querySelectorAll('.Oi');

        targets.forEach(el => {
            const text = el.getAttribute('data-text') || el.innerText;
            const distortion = parseFloat(el.getAttribute('data-w')) || 1;

            // Erstelle für das ganze Wort ein Plane (vereinfacht für Performance)
            // Im Original wird jeder Buchstabe einzeln berechnet, hier nutzen wir den Atlas
            const geometry = new THREE.PlaneGeometry(text.length * 0.5, 1);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    uMap: { value: this.texture },
                    uTime: { value: 0 },
                    uColor: { value: new THREE.Color(0xffffff) },
                    uOpacity: { value: 0 },
                    uDistortion: { value: distortion },
                    uHover: { value: 0 }
                },
                vertexShader,
                fragmentShader,
                transparent: true
            });

            const mesh = new THREE.Mesh(geometry, material);
            this.scene.add(mesh);

            const item = { el, mesh, material };
            this.meshes.push(item);

            // Mouse Events am Parent Link
            const link = el.closest('a');
            if(link) {
                link.addEventListener('mouseenter', () => {
                    gsap.to(material.uniforms.uHover, { value: 1, duration: 1, ease: "expo.out" });
                    gsap.to(material.uniforms.uOpacity, { value: 1, duration: 0.5 });
                    el.style.visibility = 'hidden';
                });
                link.addEventListener('mouseleave', () => {
                    gsap.to(material.uniforms.uHover, { value: 0, duration: 1, ease: "expo.out" });
                    gsap.to(material.uniforms.uOpacity, { value: 0, duration: 0.5 });
                    el.style.visibility = 'visible';
                });
            }
        });
    }

    animate() {
        this.meshes.forEach(m => {
            m.material.uniforms.uTime.value += 0.05;

            // Sync WebGL Mesh mit DOM Position
            const rect = m.el.getBoundingClientRect();
            const x = (rect.left + rect.width / 2) / window.innerWidth * 2 - 1;
            const y = -(rect.top + rect.height / 2) / window.innerHeight * 2 + 1;

            // Mapping auf 3D Raum
            m.mesh.position.x = x * 2.5;
            m.mesh.position.y = y * 1.5;
        });

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}

export const mount = () => new OiWebGL();