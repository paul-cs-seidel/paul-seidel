/*
 * fractal-effect.config.js — Oi/Image-Hover aus
 * /Users/paulseidel/Downloads/Paul-Seidel-Portfolio-main.zip extrahiert.
 *
 * Quelle: vendor/split/webgl-oi.js
 *   - Klasse `Xt` = Bild-Oi mit Mouse-Distortion (Z387–522)
 *   - Fragment `th` / Vertex `eh` (Z523–605)
 *   - createEls()-Uniforms fuer normale Bild-Oi (Z3840–3882)
 */

export const FRACTAL_EVENTS = Object.freeze({
  enter: 'signal-pole:fractal-hover-enter',
  leave: 'signal-pole:fractal-hover-leave',
});

export const FRACTAL_CLASSES = Object.freeze({
  host: 'Oi',
  canvas: 'fractal-effect__canvas',
  ready: 'is-fractal-ready',
  active: 'is-fractal-active',
  failed: 'is-fractal-failed',
});

export const DEFAULT_FRACTAL_OPTIONS = Object.freeze({
  selector: '.Oi',
  imageSelector: 'img',
  pointerQuery: '(pointer: fine)',
  dpr: Object.freeze({
    min: 2, // original: Math.max(window.devicePixelRatio, 2)
    max: 2.5,
  }),
  mouse: Object.freeze({
    enterEase: 0.03, // Xt.mvFn()
    leaveEase: 0.01, // Xt.lvFn()
    idleEase: 0.06, // Xt constructor
    settle: 0.0006,
  }),
  reveal: Object.freeze({
    from: 0.8, // Xt animctr default; data-op flips to -0.8 in original
    to: 0,
    duration: 0.5, // GSAP default tween duration in the vendor timeline
    ease: 'power2.inOut',
  }),
  uniforms: Object.freeze({
    uStart: 0,
    uStart1: 0.5,
    uMouse: Object.freeze([0, 0]),
  }),
});

export const VERTEX_SHADER = `
attribute vec2 uv;
attribute vec2 position;
uniform sampler2D tMap;
uniform vec2 uCover;
uniform vec2 uTextureSize;
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
vec2 resizeUvCover(vec2 uvn, vec2 size, vec2 resolution) {
    vec2 ratio = vec2(
        min((resolution.x / resolution.y) / (size.x / size.y), 1.0),
        min((resolution.y / resolution.x) / (size.y / size.x), 1.0)
    );
    return vec2(
        uvn.x * ratio.x + (1.0 - ratio.x) * 0.5,
        uvn.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
}
void main() {
    vUv = uv.xy;
    vUv = resizeUvCover(uv, uTextureSize, uCover);
    gl_Position = vec4(position, 0, 1);
}`;

export const FRAGMENT_SHADER = `
precision highp float;
uniform vec2 uCover;
uniform vec2 uTextureSize;
uniform sampler2D tMap;
uniform float uStart;
uniform float uStart1;
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
varying float vPos;
vec2 coverTexture( vec2 imgSize, vec2 ouv, vec2 mouse) {
  vec2 s = uCover;
  vec2 i = imgSize;
  ouv.x-=( (mouse.x) * 1.);
  float rs = s.x / s.y;
  float ri = i.x / i.y;
  vec2 resized = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
  vec2 offset = (rs < ri ? vec2((resized.x - s.x) / 2.0, 0.0) : vec2(0.0, (resized.y - s.y) / 2.0)) / resized;
  vec2 uv = ouv * s / resized + offset;
  return uv;
}
void main() {
float sum = 0.;
vec2 mouse = uMouse;
vec2 tSize = uTextureSize;
mouse.x += (uStart) * -.8;
tSize.x *= 1. + abs(mouse.x);
vec2 cover = coverTexture(tSize, vUv,mouse);
float cols = 8.;
float timeralpha = 0.;
float alpha = 1.;
vec2 U = cover,
    P = vec2(cols, cols),
    C = floor(U*P)/P;
    float centpos = vUv.x + (mouse.x );
    centpos += -.5 + (mouse.x * 2.4 );
    centpos *=2.;
    centpos = abs(centpos);
    // Gleich breite Spalten: erst auf einem gleichmaessigen Raster quantisieren
    // (signiert), dann den Betrag als symmetrische Staerke nehmen. Das Original
    // nahm abs() VOR floor() -> die Mittelspalte wurde doppelt so breit.
    float centSigned = ((1. - vUv.x) - .5 + (mouse.x * .4)) * 2.;
    float colIndex = floor(centSigned * P.x + .5);
    float otro = abs(colIndex) / P.x;
    U.x -= otro;
    U.x += (mouse.x * (otro * .2));
    U.x += (centpos*1.2) * (mouse.x * (otro * .1));
    U.x += otro;
  vec2 direction = U;
  float distor = 1.;
  distor += (.006 * abs(mouse.x));
  U.x += uMouse.x * .2;
  if(U.x > 1.){
  }
  if(U.x < 0.){
  }
  vec2 end = U;
  float r = texture2D(tMap, vec2(end.x,end.y)).r;
  float g = texture2D(tMap, vec2(end.x,end.y)).g;
  float b = texture2D(tMap, vec2(end.x,end.y)).b;
  gl_FragColor = vec4(r , g , b ,alpha);
}`;
