export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uDistortion;
  uniform float uMouseDist;
  uniform vec2 uMouse;
  uniform float uOpacity;

  void main() {
    vec2 uv = vUv;
    
    // Flüssigkeits-Verzerrung basierend auf uTime und data-w
    float distortion = sin(uv.y * 10.0 + uTime * 2.0) * (0.005 * uDistortion);
    uv.x += distortion;
    
    // Maus-Interaktion (data-m)
    float dist = distance(uv, uMouse);
    if(dist < 0.3) {
        uv.x += (0.01 * uMouseDist) * (1.0 - dist/0.3);
    }

    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = vec4(color.rgb, color.a * uOpacity);
  }
`;