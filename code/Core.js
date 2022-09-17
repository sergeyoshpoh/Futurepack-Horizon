IMPORT("TileRender");
IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("ScrutinyAPI");
IMPORT("ItemAnimHelper");
IMPORT("ConnectedTexture");
IMPORT("RenderAPI");
// это библиотеки распаковал
let sj = EnergyTypeRegistry.assureEnergyType("spacejoule", 0.25);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

var RF = EnergyTypeRegistry.assureEnergyType("Rf", 0.25);

var ft = EnergyTypeRegistry.assureEnergyType("FutureTock", 0.25);
var glass_block_type = Block.createSpecialType({
    solid: false,
    material: 16,
    destroytime: 0.3,
    explosionres: 1.5,
    renderlayer: 3,
    rendertype: 0,
    translucency: 1,
    lightopacity: 0
});
var iron_block_type = Block.createSpecialType({
    solid: true,
    material: 4,
    destroytime: 5,
    explosionres: 30,
    renderlayer: 3,
    rendertype: 0,
    translucency: 0,
    lightopacity: 15
});

var crystal_block_type = Block.createSpecialType({
    solid: false,
    material: 16,
    destroytime: 0,
    explosionres: 1.5,
    renderlayer: 3,
    rendertype: 0,
    translucency: 0,
    lightopacity: 0,
    lightlevel: 7
});

var granulat_block_type = Block.createSpecialType({
    solid: false,
    material: 3,
    destroytime: 3,
    explosionres: 1.5,
    renderlayer: 3,
    rendertype: 0,
    translucency: 0,
    lightopacity: 0,
    lightlevel: 7
});

let colors = ["white","light_gray","gray","black","brown","red","orange","yellow","lime","green","cyan","light_blue","blue","purple","magenta","pink"];
let bcolors = ["White","Light gray","Gray","Black","Brown","Red","Orange","Yellow","Lime","Green","Cyan","Light blue","Blue","Purple","Magenta","Pink"];

var lamp_block_type = Block.createSpecialType({
    solid: true,
    material: 4,
    destroytime: 5,
    explosionres: 1.5,
    renderlayer: 3,
    rendertype: 0,
    translucency: 1,
    lightopacity: 15,
    lightlevel: 15
});
