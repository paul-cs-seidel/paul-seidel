import * as THREE from 'three';
import gsap from 'gsap';

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uHover;
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Der Paul-Seidel-Liquid-Effekt (Sinus-Wellen)
    // Nur aktiv, wenn uHover > 0
    if(uHover > 0.0) {
        float speed = uTime * 2.5;
        float noise = sin(pos.y * 10.0 + speed) * cos(pos.x * 5.0 + speed);
        pos.x += noise * 0.1 * uHover;
        pos.y += sin(pos.x * 8.0 + speed) * 0.05 * uHover;
    }
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uMap;
  uniform float uOpacity;
  uniform vec3 uColor;

  void main() {
    vec4 texColor = texture2D(uMap, vUv);
    
    // Wir nutzen den Alpha-Kanal der Textur und multiplizieren ihn mit uOpacity
    gl_FragColor = vec4(uColor, texColor.a * uOpacity);
    
    // Performance: Pixel mit fast 0 Alpha gar nicht erst zeichnen
    if (gl_FragColor.a < 0.001) discard;
  }
`;

export function mount(container) {
    // 1. Element finden (das .Oi div aus deinem HTML)
    const el = container.querySelector('.Oi');
    if (!el) return;

    // Schutz: Verhindern, dass der Effekt mehrfach auf dem gleichen Element erstellt wird
    if (el.dataset.mounted) return;
    el.dataset.mounted = "true";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Canvas Styling
    renderer.domElement.className = 'oi-canvas-overlay';
    renderer.domElement.style.cssText = 'position:fixed; top:0; left:0; pointer-events:none; z-index:9999;';
    document.body.appendChild(renderer.domElement);

    // 2. Text-Textur erstellen (dynamisch aus dem DOM)
    const textStr = el.getAttribute('data-text') || "SCHREIB MIR";
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024; // Hohe Auflösung für Schärfe
    canvas.height = 256;

    // Hier die Font anpassen, die du in CSS nutzt (z.B. Neue Montreal)
    ctx.font = "bold 140px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(textStr, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uMap: { value: texture },
            uTime: { value: 0 },
            uOpacity: { value: 0 },
            uHover: { value: 0 },
            uColor: { value: new THREE.Color(0xffffff) }
        },
        vertexShader,
        fragmentShader,
        transparent: true
    });

    // Seitenverhältnis der Plane an das Wort anpassen
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 1), material);
    scene.add(mesh);

    // 3. Hover-Events (am Link-Parent)
    const parentLink = el.closest('a');
    if (parentLink) {
        parentLink.addEventListener('mouseenter', () => {
            gsap.to(material.uniforms.uOpacity, { value: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(material.uniforms.uHover, { value: 1, duration: 1.2, ease: "expo.out" });
            el.style.opacity = "0"; // Original-Text im DOM verstecken
        });
        parentLink.addEventListener('mouseleave', () => {
            gsap.to(material.uniforms.uOpacity, { value: 0, duration: 0.6, ease: "power2.inOut" });
            gsap.to(material.uniforms.uHover, { value: 0, duration: 1.0, ease: "power2.inOut" });
            el.style.opacity = "1"; // Original-Text wieder zeigen
        });
    }

    // 4. Animation & Position Sync
    function animate(time) {
        material.uniforms.uTime.value = time * 0.001;

        // WebGL-Mesh exakt über das HTML-Element schieben
        const rect = el.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth * 2 - 1;
        const y = -(rect.top + rect.height / 2) / window.innerHeight * 2 + 1;

        // Multiplikatoren für das 3D-Alignment (abhängig von Kamera-Z)
        mesh.position.x = x * 2.5;
        mesh.position.y = y * 1.85;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // Resize-Handler
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    return {
        destroy: () => {
            renderer.dispose();
            if (renderer.domElement.parentNode) {
                document.body.removeChild(renderer.domElement);
            }
        }
    };
}