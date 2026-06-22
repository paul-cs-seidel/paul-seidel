# fractalEffect

Port des `.Oi`-Bild-Hovers aus `Paul-Seidel-Portfolio-main.zip`.

Quelle:

- `vendor/split/webgl-oi.js`
- Klasse `Xt` fuer den Mouse-Hover auf Bildern
- Shader `th`/`eh`

Dieses Modul nutzt keinen Vendor-Runtime-Bootstrap. Es mountet pro `.Oi` ein
kleines natives WebGL-Canvas ueber dem vorhandenen Bild, uebernimmt die
Original-Uniforms (`uStart`, `uStart1`, `uMouse`, `uCover`, `uTextureSize`) und
rendert nur bei Hover/Resize.
