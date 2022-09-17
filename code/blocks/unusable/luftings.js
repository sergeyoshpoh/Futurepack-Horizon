gittersG = []
luftungsG = []
glassG = []
neonLampG = []
blocksG = []
for(var i in colors){
let color = colors[i];
let bcolor = bcolors[i];
IDRegistry.genBlockID(color+"_luftung");
Block.createBlock(color+"_luftung", [ {name: bcolor +" luftung", texture: [["luftung_"+color, 0]], inCreative: true}], iron_block_type)

IDRegistry.genBlockID(color+"_glas");
Block.createBlock(color+"_glas", [ {name: bcolor +" glass", texture: [["glas_"+color, 0]], inCreative: true}], glass_block_type)

IDRegistry.genBlockID("neon_" +color+"_off");
Block.createBlock("neon_" + color + "_off", [ {name: bcolor +" neon lamp off", texture: [["neon_" + color + "_off", 0]], inCreative: true}], iron_block_type)

IDRegistry.genBlockID("neon_" +color+"_on");
Block.createBlock("neon_" + color + "_on", [ {name: bcolor +" neon lamp on", texture: [["neon_" + color + "_on", 0]], inCreative: false}], lamp_block_type)

IDRegistry.genBlockID("plasma_" +color+"_off");
Block.createBlock("plasma_" + color + "_off", [ {name: bcolor +" plasma lamp off", texture: [["plasma_" + color + "_off", 0]], inCreative: true}], iron_block_type)

IDRegistry.genBlockID("plasma_" +color+"_on");
Block.createBlock("plasma_" + color + "_on", [ {name: bcolor +" plasma lamp on", texture: [["plasma_" + color + "_on", 0]], inCreative: true}], lamp_block_type)

ToolAPI.registerBlockMaterial(BlockID[color+"_luftung"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID[color+"_glas"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["plasma_" + color + "_off"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["neon" + color + "_on"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["neon" + color + "_off"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["plasma_" + color + "_on"], "stone", 2);

TileEntity.registerPrototype(BlockID["neon_"+color+"_off"], {
 defaultValues: {
  redstones: 0,
  redstoneSignal: false
 },
 redstone: function (params) {
  //devLog(JSON.stringify(params));
  if (params.onLoad) return;
  if (params.power > 0)
   this.data.redstones++;
  else
   this.data.redstones--;
  if (this.data.redstones == 0)
   this.data.redstoneSignal = false;
  else
   this.data.redstoneSignal = true;

 },
 tick: function () {
  if (this.data.redstoneSignal) {
   this.blockID = BlockID["neon_"+color+"_on"];
this.blockSource.setBlock(this.x, this.y, this.z, this.blockID);
  }
 }
});
ConnectedTexture.setModelForGlass(BlockID[color+"_glas"], 0, "glas_"+color);

blocksG.push(BlockID[color+"_iron_block"]);
gittersG.push(BlockID[color+"_gitter"]);
luftungsG.push(BlockID[color+"_luftung"]);
glassG.push(BlockID[color+"_glas"]);
neonLampG.push(BlockID["neon_"+color+"_off"]);
};
Item.addCreativeGroup("gitters", "Iron Gitters", gittersG);
Item.addCreativeGroup("iron_blocks", "Colored Iron Blocks", blocksG);
Item.addCreativeGroup("luftungs", "Iron Luftungs", luftungsG);
Item.addCreativeGroup("glass", "Iron Glass", glassG);
Item.addCreativeGroup("neon_lamp", "Neon Lamp", neonLampG);

/*let s = [" стекло"]
var l = [" glass"]
var rcc = ["Белое","Светло-серое","Серое","Чёрное", "Коричневое","Красное", "Оранжевое", "Жёлтое", "Лаймовое", "Зеленое", "Голубое", "Светло-голубое", "Синее", "Фиолетовое", "Пурпурное", "Розовое"];
for(var i in colors){
	let colorus = rc[i];
	let bc = bcolors[i];
	let rc = rcc[i];
Translation.addTranslation(bc[1] + l, {
ru: rc[1] + s
});
Translation.addTranslation(bc[2] + l, {
ru: rc[2] + s
});
Translation.addTranslation(bc[3] + l, {
ru: rc[3] + s
});
Translation.addTranslation(bc[4] + l, {
ru: rc[4] + s
});
Translation.addTranslation(bc[5] + l, {
ru: rc[5] + s
});
Translation.addTranslation(bc[6] + l, {
ru: rc[6] + s
});
Translation.addTranslation(bc[7] + l, {
ru: rc[7] + s
});
Translation.addTranslation(bc[8] + l, {
ru: rc[8] + s
});
Translation.addTranslation(bc[9] + l, {
ru: rc[9] + s
});
Translation.addTranslation(bc[10] + l, {
ru: rc[10] + s
});
Translation.addTranslation(bc[11] + l, {
ru: rc[11] + s
});
Translation.addTranslation(bc[12] + l, {
ru: rc[12] + s
});
Translation.addTranslation(bc[13] + l, {
ru: rc[13] + s
});
Translation.addTranslation(bc[14] + l, {
ru: rc[14] + s
});
Translation.addTranslation(bc[15] + l, {
ru: rc[15] + s
});
Translation.addTranslation(bc[16] + l, {
ru: rc[16] + s
});
}*/
