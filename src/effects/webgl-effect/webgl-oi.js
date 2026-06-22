import * as THREE from 'three';
import gsap from 'gsap';

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uHover;
  void main() {
    vUv = uv;
    vec3 pos = position;
    if(uHover > 0.0) {
        // Der Paul-Seidel-Liquid-Effekt
        pos.x += sin(pos.y * 12.0 + uTime * 2.5) * (0.04 * uHover);
        pos.y += cos(pos.x * 8.0 + uTime * 1.5) * (0.02 * uHover);
    }
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uMap;
  uniform float uOpacity;
  
  // MSDF Median Funktion für scharfe Kanten
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
    const el = container.querySelector('.Oi');
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Canvas Styling: Fixiert über dem UI
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.zIndex = '9999';
    document.body.appendChild(renderer.domElement);

    // Lade deine PPNeueMontreal-Medium.png
    const loader = new THREE.TextureLoader();
    const texture = loader.load('./assets/fonts/PPNeueMontreal-Medium.png');

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uMap: { value: texture },
            uTime: { value: 0 },
            uOpacity: { value: 0 },
            uHover: { value: 0 }
        },
        vertexShader,
        fragmentShader,
        transparent: true
    });

    // Plane erstellen, die grob die Proportionen des Wortes hat
    const geometry = new THREE.PlaneGeometry(3, 0.8);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const parentLink = el.closest('a');
    if (parentLink) {
        parentLink.addEventListener('mouseenter', () => {
            gsap.to(material.uniforms.uOpacity, { value: 1, duration: 0.3 });
            gsap.to(material.uniforms.uHover, { value: 1, duration: 0.8, ease: "power2.out" });
            el.style.opacity = "0"; // Original verstecken
        });
        parentLink.addEventListener('mouseleave', () => {
            gsap.to(material.uniforms.uOpacity, { value: 0, duration: 0.3 });
            gsap.to(material.uniforms.uHover, { value: 0, duration: 0.8 });
            el.style.opacity = "1"; // Original zeigen
        });
    }

    function animate(time) {
        material.uniforms.uTime.value = time * 0.001;

        // Mesh an DOM Element Position binden
        const rect = el.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth * 2 - 1;
        const y = -(rect.top + rect.height / 2) / window.innerHeight * 2 + 1;

        // Faktor für das Alignment (hängt von Kamera-Z ab)
        mesh.position.x = x * 2.8;
        mesh.position.y = y * 2.1;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    return {
        destroy: () => {
            renderer.dispose();
            document.body.removeChild(renderer.domElement);
        }
    };
}