import * as THREE from 'three';
import gsap from 'gsap';

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uHover;
  void main() {
    vUv = uv;
    vec3 pos = position;
    // Subtile Wellenbewegung nur bei Hover
    if(uHover > 0.0) {
        pos.x += sin(pos.y * 8.0 + uTime * 2.0) * (0.03 * uHover);
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uMap;
  uniform float uOpacity;
  
  float median(float r, float g, float b) {
    return max(min(r, g), min(max(r, g), b));
  }

  void main() {
    vec3 sample = texture2D(uMap, vUv).rgb;
    float sigDist = median(sample.r, sample.g, sample.b) - 0.5;
    float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * uOpacity);
  }
`;

export function mount(container) {
    const target = container.querySelector('.Oi');
    if (!target) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.cssText = 'position:fixed; top:0; left:0; pointer-events:none; z-index:1000;';
    document.body.appendChild(renderer.domElement);

    // Textur laden (Vite nutzt /public als Root, also kein "public/" im Pfad)
    const tex = new THREE.TextureLoader().load('/assets/fonts/PPNeueMontreal-Medium.png');

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uMap: { value: tex },
            uTime: { value: 0 },
            uOpacity: { value: 0 },
            uHover: { value: 0 }
        },
        vertexShader,
        fragmentShader,
        transparent: true
    });

    // Plane erstellen (Größe des SCHREIB MIR Texts)
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 0.6), material);
    scene.add(mesh);

    const link = target.closest('a');
    link.addEventListener('mouseenter', () => {
        gsap.to(material.uniforms.uOpacity, { value: 1, duration: 0.4 });
        gsap.to(material.uniforms.uHover, { value: 1, duration: 0.8, ease: "power2.out" });
        target.style.opacity = "0"; // Statischen Text verstecken
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(material.uniforms.uOpacity, { value: 0, duration: 0.4 });
        gsap.to(material.uniforms.uHover, { value: 0, duration: 0.8 });
        target.style.opacity = "1";
    });

    function animate() {
        material.uniforms.uTime.value += 0.05;

        // Position des Mesh mit dem DOM Element synchronisieren
        const rect = target.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth * 2 - 1;
        const y = -(rect.top + rect.height / 2) / window.innerHeight * 2 + 1;

        mesh.position.x = x * 2.8;
        mesh.position.y = y * 1.8;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}