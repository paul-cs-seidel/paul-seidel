# Effekt-Landkarte (generiert von split-js.mjs)

Zuordnung der erkannten Effekt-Gruppen zu den zerlegten Turbopack-Modulen, mit
Zeilen-Fundstellen (per Substring-Fingerprint). Reassembly siehe `effects.manifest.json`.

> **Hinweis:** Turbopack hat in diesem Build die *gesamte* App inkl. three.js in
> **ein** Modul scope-gehoisted (`vendor/050096.app-bundle.js`, ~60k Zeilen,
> gemeinsamer Closure-Scope, gemangelte Bindings). Ein verlustfreies Aufteilen
> *innerhalb* dieses Moduls in eigenständige Dateien ist nicht möglich — darum
> verweisen die Effekte unten auf **Zeilen** in dieser Datei.

## Custom-Cursor

- `vendor/050096.app-bundle.js` (#50096) — `mouse-stalker` @ Z59637, Z59641, Z59644, Z59646, Z59654
- `vendor/050096.app-bundle.js` (#50096) — `sticker-cursor-preview` @ Z59741, Z59746
- `vendor/050096.app-bundle.js` (#50096) — `data-cursor-label` @ Z62, Z72, Z224, Z6283, Z6302, Z6346 …

## Preloader

- `vendor/050096.app-bundle.js` (#50096) — `preloader` @ Z51185, Z51189, Z51195, Z51197

## Seitenübergang + Reveal

- `vendor/050096.app-bundle.js` (#50096) — `page-transition` @ Z7562, Z7567, Z7582, Z7740, Z7745, Z7757 …
- `vendor/050096.app-bundle.js` (#50096) — `split-heading` @ Z6972
- `vendor/050096.app-bundle.js` (#50096) — `text-reveal` @ Z6945, Z6948, Z59846, Z59847, Z59850, Z59858 …

## Galerie + 3D-Hero

- `vendor/050096.app-bundle.js` (#50096) — `projects-marquee` @ Z6053, Z6104, Z6434, Z6492, Z6496, Z6502 …
- `vendor/050096.app-bundle.js` (#50096) — `GLTFLoader` @ Z46815, Z46851, Z46865, Z46889, Z46990, Z47301 …
- `vendor/050096.app-bundle.js` (#50096) — `.glb` @ Z50778, Z60057
- `vendor/050096.app-bundle.js` (#50096) — `BufferGeometry` @ Z13358, Z13362, Z13482, Z13494, Z13521, Z13531 …
- `vendor/050096.app-bundle.js` (#50096) — `WebGLRenderer` @ Z22753, Z25572, Z25579, Z26529, Z27485, Z29833 …

