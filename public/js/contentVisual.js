// https://codepen.io/ycw/pen/pojORxK
// https://stackoverflow.com/questions/2719668/an-html5-canvas-element-in-the-background-of-my-page

const { Engine, Scene, ArcRotateCamera, UniversalCamera, Vector3, MeshBuilder, PBRMaterial, PointLight, DefaultRenderingPipeline, SolidParticleSystem, CSG } = BABYLON;

const canvas = document.querySelector('canvas');
const engine = new Engine(canvas);
const scene = new Scene(engine);
scene.clearColor.set(0, 0, 0, 1);
const camera = new ArcRotateCamera('', -Math.PI / 2, Math.PI / 2, 48, new BABYLON.Vector3(0, 5, 0), scene);
camera.angularSensibilityX = 4000;
camera.angularSensibilityY = 4000;
camera.lowerRadiusLimit = 10;
camera.upperRadiusLimit = 120;
camera.lowerBetaLimit = null;
camera.upperBetaLimit = null;
camera.allowUpsideDown = true;

camera.attachControl(canvas);

const mat = new PBRMaterial('', scene);
mat.roughness = 0.1;
mat.metallic = 0.1;
mat.alpha = 0.1;
mat.backFaceCulling = false;
/*
doesn't go back to green on mobile
const matTexture = new BABYLON.NoiseProceduralTexture("perlin", 10, scene);
matTexture.octaves = 6;
mat.albedoTexture = matTexture;
*/
const cylinder = MeshBuilder.CreateCylinder('', { height: 11, diameter: 11, tessellation: 12 });
const knot = MeshBuilder.CreateTorusKnot('', {radius: 5, tube: 1.2, radialSegments: 16, tubularSegments: 12}) // magic
const jelly = CSG.FromMesh(cylinder).subtract(CSG.FromMesh(knot)).toMesh('', mat, scene, false);
cylinder.dispose();
knot.dispose();

const light = new PointLight('', new Vector3(0, 0, 0), scene);
light.intensity = 700;
const rnds = (a = 0, b = 1) => (a + Math.random() * (b - a)) * (Math.random() < 0.5 ? -1 : 1);

const sps = new SolidParticleSystem('', scene, {});
sps.addShape(jelly, 16);
sps.updateParticle = (p) => {
    p.color?.set(0.1, 0.05, 0.1);
    p.position.set(rnds(0, 24), rnds(0, 36), rnds(0,24));
    p.rotation.set(rnds(0, 2 * Math.PI), rnds(0, 2 * Math.PI), 0);
    return p;
};
const spsmesh = sps.buildMesh();
jelly.dispose();
sps.setParticles();
spsmesh.material = mat;
spsmesh.alwaysSelectAsActiveMesh = true;
scene.onBeforeRenderObservable.add(() => spsmesh.rotation.y -= 0.001);

const pp = new DefaultRenderingPipeline('');
pp.bloomEnabled = true;
pp.bloomWeight = 0.05;
pp.sharpenEnabled = true;
pp.sharpen.edgeAmount = 1;

window.onresize = () => engine.resize();
engine.runRenderLoop(() => scene.render());