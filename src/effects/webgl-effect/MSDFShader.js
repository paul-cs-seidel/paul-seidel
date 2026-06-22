export const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uDistortion;
  uniform float uHover;

  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Liquid Distortion: Sinuswellen basierend auf uTime und Hover-Status
    if(uHover > 0.0) {
        pos.x += sin(pos.y * 10.0 + uTime * 2.0) * (0.05 * uDistortion * uHover);
        pos.y += cos(pos.x * 10.0 + uTime * 2.0) * (0.02 * uDistortion * uHover);
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const fragmentShader = `
  // MSDF Fragment Shader
  uniform sampler2D uMap;
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;

  float median(float r, float g, float b) {
    return max(min(r, g), min(max(r, g), b));
  }

  void main() {
    vec3 sample = texture2D(uMap, vUv).rgb;
    float sigDist = median(sample.r, sample.g, sample.b) - 0.5;
    float alpha = clamp(sigDist / fwidth(sigDist) + 0.5, 0.0, 1.0);
    
    gl_FragColor = vec4(uColor, alpha * uOpacity);
    if (gl_FragColor.a < 0.01) discard;
  }
`;