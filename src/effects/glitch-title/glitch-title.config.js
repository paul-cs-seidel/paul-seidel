/*
 * glitch-title.config.js — Stellschrauben des MSDF-Glitch-Titels.
 *
 * 1:1 portiert aus sanchezrebuild/Portfolio (Footer-Title `data-temp="foot"`,
 * Klasse `de`): Mesh-Shader Ai (Vertex) + Sh (MSDF-Fragment), Post-Shader Mh
 * (flüssiger tan()-Melt/Ripple). Animation über zwei GSAP-Timelines:
 *   animctr  — Reveal (uTime-Puls + uStart), beim Seitenwechsel gescrubbt.
 *   animmouse — Hover-Melt (uMouseT + uMouse), von der VERTIKALEN Cursor-
 *               Position gescrubbt (norm = y / höhe, gelerpt).
 * Flächen/Verhalten: ../../../styles/effects/glitch-title.css.
 */

export const GLITCH_TITLE_SELECTORS = Object.freeze({
  host: '[data-glitch-title]',
});

export const GLITCH_TITLE_CLASSES = Object.freeze({
  stage: 'glitch-title-stage',
  canvas: 'glitch-title__canvas',
  ready: 'is-glitch-ready',
  failed: 'is-glitch-failed',
});

export const GLITCH_TITLE_ASSETS = Object.freeze({
  json: '/assets/msdf/PPNeueMontreal-Medium.json',
  png: '/assets/msdf/PPNeueMontreal-Medium.png',
});

export const DEFAULT_GLITCH_TITLE_OPTIONS = Object.freeze({
  /** Textfarbe als Graustufe (Sh: vec3(uColor)). 0 = schwarz. */
  color: 0,
  /** MSDF-Größe relativ zur gemessenen H1-Schriftgröße (px → Weltgröße). */
  sizeScale: 1,
  /** Buchstabenabstand in em (Original-Footer data-l: -0.022). */
  letterSpacing: -0.022,
  /** Canvas-Polster um die H1-Box (×Schriftgröße) — unten mehr für den Melt. */
  padding: Object.freeze({ x: 0.18, top: 0.32, bottom: 1.0 }),
  /** Vertikale Lage des Textblocks im Canvas (0 = oben, 1 = unten). */
  anchorY: 0.42,
  dprMax: 2,
  /** Reveal-Dauer (animctr wird darüber 0→1 gescrubbt). */
  revealDuration: 1.5,
  /** Lerp-Faktoren für das Cursor-Tracking (Original: enter 0.02, leave 0.01). */
  enterLerp: 0.02,
  leaveLerp: 0.01,
});

/* ── Shader: EXAKT aus main.js übernommen ─────────────────────────────────── */

/* Vertex `Ai` (Mesh) — GLSL ES 3.00. */
export const TEXT_VERTEX = `#version 300 es
precision highp float;
#define attribute in
#define varying out
attribute vec2 uv;
attribute vec3 position;
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
attribute float id;
attribute vec3 index;
uniform sampler2D tMap;
uniform float uTime;
uniform vec2 uMouse;
uniform float uPower;
uniform float uCols;
uniform int uLength;
varying vec2 vUv;
varying vec2 vUvR;
varying vec3 vPos;
varying vec3 vIndex;
varying float vId;
void main() {
    vUv = uv;
    vUvR = vec2(gl_VertexID << 1 & 2, gl_VertexID & 2);
    vPos = position;
    vId = id;
    vIndex = index;
    if(vId == 3.){
    }
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

/* Mesh-Fragment `Sh` (Footer) — reines MSDF in vec3(uColor). */
export const TEXT_FRAGMENT = `#version 300 es
precision highp float;
#define varying in
#define texture2D texture
#define gl_FragColor FragColor
out vec4 FragColor;
uniform sampler2D tMap;
uniform float uColor;
uniform float uStart;
varying vec2 vUv;
varying vec2 vUvR;
void main() {
    vec3 tex = vec3(0.);
    tex = texture2D(tMap, vUv ).rgb;
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
    float d = fwidth(signedDist);
    float alpha = smoothstep(-d, d, signedDist);
    gl_FragColor.rgb = vec3(uColor);
    gl_FragColor.a = alpha;
}`;

/* Post-Fragment `Mh` (Footer) — flüssiger tan()-Melt + Chroma. GLSL ES 1.00. */
export const GLITCH_FRAGMENT = `precision highp float;
uniform sampler2D tMap;
uniform float uTime;
uniform float uStart;
uniform float uOut;
uniform float uMouseT;
uniform float uMouse;
varying vec2 vUv;
float ripple(float uv, float time, float prog) {
        float distance = length(((uv ) + (time * 2.)   )  );
        return tan(distance * (1. ) ) * (prog * -1.85) ;
      }
float rippleout(float uv, float time, float prog, float multi) {
      float distance = length((uv * 3. ) + (time * 1.4)  );
      return tan(distance * (1.) ) * (multi * prog );
    }
  void main() {
    float timer = uOut;
    float centeredy = (vUv.y - .5) * 2.;
    float rippleOut = (rippleout(vUv.y  ,timer, 1. - abs(timer),-.36) * ( (.1 * (1. - abs(timer) ) ) ) );
      float time2 = abs(uStart) * 2.;
      float rippleUV = ripple(vUv.y,uStart , uTime) * (.001 * uTime);
      float rippleUV2 = ripple(vUv.y,uMouse, uMouseT) * (.0006 * uMouseT);
  vec2 U = vec2(vUv.x,rippleUV + rippleUV2 + vUv.y + rippleOut);
  float distor = 1.;
  U.y += uStart * .1002;
  float r = texture2D(tMap, vec2(U.x*distor,U.y/distor)).r;
  float g = texture2D(tMap, vec2(U.x,U.y)).g * ( distor );
  float b = texture2D(tMap, vec2(U.x,U.y)).b * ( distor + ( 1.6*(distor - 1.) ) );
  float a = texture2D(tMap, vec2(U.x,U.y)).a;
  if(rippleOut  * -32. > centeredy + timer){
    gl_FragColor = vec4(0. ,0. ,0. ,0.);
  }
  else{
      gl_FragColor = vec4(r , g , b ,a);
      gl_FragColor.a -= abs(rippleUV  ) *  (.5 );
      gl_FragColor.a -= abs(rippleUV2  ) *  (.5 );
  }
}`;
