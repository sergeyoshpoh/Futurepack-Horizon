let foodtexture = ["erse","topinambur_potato", "mendel_flower"]
let foodname = ["Erse", "Topinambur potato","Mendel berry"]
let saturated = [4,4,2]
let blockberryName = ["Erse berry","Topinambur", "Mendel berry"]
let blockBerryTexture = ["erse_pflanze", "topinambur_b", "mendel_berry_plant"]
for(var i in foodtexture){
	let fdt = foodtexture[i];
	let fdn = foodname[i];
	let bfn = blockberryName[i];
	let bft = blockBerryTexture[i];
    let satr = saturated[i];
	IDRegistry.genItemID(fdt); 
Item.createFoodItem(fdt, fdn, {name: fdt, meta: 0}, {stack: 64,food: satr});

Item.registerUseFunction(fdt, function(coords, item, block, player) {
    let source = BlockSource.getDefaultForActor(player);
    if (source.getBlock(coords.x, coords.y, coords.z).id == VanillaBlockID.farmland) {
        source.setBlock(coords.x, coords.y+1, coords.z, BlockID[bft], 0);
       Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});
	IDRegistry.genBlockID(bft);
Block.createSpecialType({
  base: VanillaTileID.wheat,
  destroytime: 0,
  explosionres: 0,
  opaque: false,
  lightopacity: 0,
  rendertype: 6,
  sound: "grass"
}, "plant");
Block.createBlock(bft, [
{   name: bfn, texture: [[bft, 0]], inCreative: false},
	{name: bfn, texture: [[bft, 1]], inCreative: false},
	{name: bfn, texture: [[bft, 2]], inCreative: false},
	{name: bfn, texture: [[bft, 3]], inCreative: false},
	{name: bfn, texture: [[bft, 4]], inCreative: false},
	{name: bfn, texture: [[bft, 5]], inCreative: false},
		{name: bfn, texture: [[bft, 6]], inCreative: false},
			{name: bfn, texture: [[bft, 7]], inCreative: false}
], "plant");
TileRenderer.setPlantModel(BlockID[bft], 0, bft, 0);
var FOOD = new ICRender.CollisionShape();
var entry = FOOD.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID[bft], -1,FOOD);

Block.registerClickFunction(BlockID[bft], function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal && block.data < 7) {
    let source = BlockSource.getDefaultForActor(player);
    source.setBlock(coords.x, coords.y, coords.z, block.id, block.data+1);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
  /*if(block.data > 7){World.drop(coords.x, coords.y, coords.z, ItemID[fdt], 2);
  let source = BlockSource.getDefaultForActor(player);
  	source.setBlock(coords.x,coords.y,coords.z,block.id,block.data - 6)
  }*/
});
Block.registerNeighbourChangeFunction(BlockID.garlicCrop, function(coords, block, changedCoords, region) {
  if (World.getBlock(coords.x, coords.y-1, coords.z).id !== VanillaBlockID.farmland) {
    World.destroyBlock(coords.x, coords.y, coords.z);
    World.drop(coords.x, coords.y, coords.z, ItemID[fdt], 2);
  }
});
Block.registerClickFunction(BlockID[bft], function(coords, item, block, player) {if(block.id == [bft] && block.data > 6){World.drop(coords.x, coords.y, coords.z, ItemID[fdt], 2); World.setBlock(coords.x, coords.y, coords.z, id, data-1);}})

Block.registerDropFunction(bft, function(coords, blockID){
    return [[fdt, 2, 0]] 
});
Block.setRandomTickCallback(BlockID[bft], function(x, y, z, id, data) {
    if (data < 7) {
        World.setBlock(x, y, z, id, data+1);
    }
});
}