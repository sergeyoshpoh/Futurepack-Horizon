IDRegistry.genBlockID("crystal_retium");
Block.createBlock("crystal_retium",[{name: "Crystal Retium", texture: [["crystal_retium", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_retium, "stone", 1);

IDRegistry.genBlockID("retium_granulat");
Block.createBlock("retium_granulat",[{name: "Retium granulat", texture: [["retium_granulat", 0]], inCreative: true} ],granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.retium_granulat, "stone", 1);

var CRYSTAL = new ICRender.CollisionShape();
var entry = CRYSTAL.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.crystal_retium, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_retium, 0, "crystal_retium", 0);


IDRegistry.genBlockID("crystal_block_retium");
Block.createBlock("crystal_block_retium",[{name: "Crystal block retium", texture: [["crystal_block_retium", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_retium, "stone", 1);

IDRegistry.genItemID("crystal_retium_1"); 
Item.createItem("crystal_retium_1", "Crystal retium", {name: "crystal_retium", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_retium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.retium_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_retium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_retium", function(coords, blockID){
    return [[ItemID.crystal_retium_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_bioterium");
Block.createBlock("crystal_bioterium",[{name: "Crystal bioterium", texture: [["crystal_bioterium", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_bioterium, "stone", 1);

IDRegistry.genBlockID("bioterium_granulat");
Block.createBlock("bioterium_granulat",[{name: "Bioterium granulat", texture: [["bioterium_granulat", 0]], inCreative: true} ], granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.bioterium_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_bioterium, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_bioterium, 0, "crystal_bioterium", 0);


IDRegistry.genBlockID("crystal_block_bioterium");
Block.createBlock("crystal_block_bioterium",[{name: "Crystal block bioterium", texture: [["crystal_block_bioterium", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_bioterium, "stone", 1);

IDRegistry.genItemID("crystal_bioterium_1"); 
Item.createItem("crystal_bioterium_1", "Crystal bioterium", {name: "crystal_bioterium", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_bioterium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.bioterium_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_bioterium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_bioterium", function(coords, blockID){
    return [[ItemID.crystal_bioterium_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_alutin");
Block.createBlock("crystal_alutin",[{name: "Crystal alutin", texture: [["crystal_alutin", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_alutin, "stone", 1);

IDRegistry.genBlockID("alutin_granulat");
Block.createBlock("alutin_granulat",[{name: "Alutin granulat", texture: [["alutin_granulat", 0]], inCreative: true} ], granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.alutin_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_alutin, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_alutin, 0, "crystal_alutin", 0);


IDRegistry.genBlockID("crystal_block_alutin");
Block.createBlock("crystal_block_alutin",[{name: "Crystal block alutin", texture: [["crystal_block_alutin", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_alutin, "stone", 1);

IDRegistry.genItemID("crystal_alutin_1"); 
Item.createItem("crystal_alutin_1", "Crystal alutin", {name: "crystal_alutin", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_alutin_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.alutin_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_alutin);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_alutin", function(coords, blockID){
    return [[ItemID.crystal_alutin_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_glowtite");
Block.createBlock("crystal_glowtite",[{name: "Crystal glowtite", texture: [["crystal_glowtite", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_glowtite, "stone", 1);

IDRegistry.genBlockID("glowtite_granulat");
Block.createBlock("glowtite_granulat",[{name: "glowtite granulat", texture: [["glowtite_granulat", 0]], inCreative: true} ], granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.glowtite_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_glowtite, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_glowtite, 0, "crystal_glowtite", 0);


IDRegistry.genBlockID("crystal_block_glowtite");
Block.createBlock("crystal_block_glowtite",[{name: "Crystal block glowtite", texture: [["crystal_block_glowtit", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_glowtite, "stone", 1);

IDRegistry.genItemID("crystal_glowtite_1"); 
Item.createItem("crystal_glowtite_1", "Crystal glowtite", {name: "crystal_glowtite", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_glowtite_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.glowtite_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_glowtite);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_glowtite", function(coords, blockID){
    return [[ItemID.crystal_glowtite_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_neon");
Block.createBlock("crystal_neon",[{name: "Crystal neon", texture: [["crystal_neon", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_neon, "stone", 1);

IDRegistry.genBlockID("neon_granulat");
Block.createBlock("neon_granulat",[{name: "neon granulat", texture: [["neon_granulat", 0]], inCreative: true} ],granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.neon_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_neon, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_neon, 0, "crystal_neon", 0);


IDRegistry.genBlockID("crystal_block_neon");
Block.createBlock("crystal_block_neon",[{name: "Crystal block neon", texture: [["crystal_block_neon", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_neon, "stone", 1);

IDRegistry.genItemID("crystal_neon_1"); 
Item.createItem("crystal_neon_1", "Crystal neon", {name: "crystal_neon", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_neon_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.neon_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_neon);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_neon", function(coords, blockID){
    return [[ItemID.crystal_neon_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_little_glowtite");
Block.createBlock("crystal_little_glowtite",[{name: "Crystal glowtite", texture: [["crystal_glowtite_bottom", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_glowtite, "stone", 1);

IDRegistry.genBlockID("crystal_big_glowtite");
Block.createBlock("crystal_big_glowtite",[{name: "Crystal glowtite", texture: [["crystal_glowtite_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_glowtite, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_glowtite, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_glowtite, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_big_glowtite, 0, "crystal_glowtite_top", 0);
TileRenderer.setPlantModel(BlockID.crystal_little_glowtite, 0, "crystal_glowtite_bottom", 0);


IDRegistry.genItemID("crystal_little_glowtite_1"); 
Item.createItem("crystal_little_glowtite_1", "Crystal glowtite", {name: "crystal_glowtite_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_glowtite_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.glowtite_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_glowtite); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_glowtite);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_glowtite", function(coords, blockID){
    return [[ItemID.crystal_little_glowtite_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_glowtite", function(coords, blockID){
    return [[ItemID.crystal_little_glowtite_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_glowtite){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_glowtite){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_retium");
Block.createBlock("crystal_little_retium",[{name: "Crystal retium", texture: [["crystal_retium_bottom", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_retium, "stone", 1);

IDRegistry.genBlockID("crystal_big_retium");
Block.createBlock("crystal_big_retium",[{name: "Crystal retium", texture: [["crystal_retium_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_retium, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_retium, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_retium, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_big_retium, 0, "crystal_retium_top", 0);
TileRenderer.setPlantModel(BlockID.crystal_little_retium, 0, "crystal_retium_bottom", 0);


IDRegistry.genItemID("crystal_little_retium_1"); 
Item.createItem("crystal_little_retium_1", "Crystal retium", {name: "crystal_retium_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_retium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.crystal_block_retium){ 
        region.setBlock(place.x, place.y, place.z, BlockID.retium_granulat); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_retium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_retium", function(coords, blockID){
    return [[ItemID.crystal_little_retium_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_retium", function(coords, blockID){
    return [[ItemID.crystal_little_retium_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_retium){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_retium){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_alutin");
Block.createBlock("crystal_little_alutin",[{name: "Crystal alutin", texture: [["crystal_alutin_bottom", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_alutin, "stone", 1);

IDRegistry.genBlockID("crystal_big_alutin");
Block.createBlock("crystal_big_alutin",[{name: "Crystal alutin", texture: [["crystal_alutin_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_alutin, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_alutin, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_alutin, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_big_alutin, 0, "crystal_alutin_top", 0);
TileRenderer.setPlantModel(BlockID.crystal_little_alutin, 0, "crystal_alutin_bottom", 0);


IDRegistry.genItemID("crystal_little_alutin_1"); 
Item.createItem("crystal_little_alutin_1", "Crystal alutin", {name: "crystal_alutin_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_alutin_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.alutin_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_alutin); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_alutin);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_alutin", function(coords, blockID){
    return [[ItemID.crystal_little_alutin_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_alutin", function(coords, blockID){
    return [[ItemID.crystal_little_alutin_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_alutin){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_alutin){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_bioterium");
Block.createBlock("crystal_little_bioterium",[{name: "Crystal bioterium", texture: [["crystal_bioterium_bottom", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_bioterium, "stone", 1);

IDRegistry.genBlockID("crystal_big_bioterium");
Block.createBlock("crystal_big_bioterium",[{name: "Crystal bioterium", texture: [["crystal_bioterium_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_bioterium, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_bioterium, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_bioterium, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_big_bioterium, 0, "crystal_bioterium_top", 0);
TileRenderer.setPlantModel(BlockID.crystal_little_bioterium, 0, "crystal_bioterium_bottom", 0);


IDRegistry.genItemID("crystal_little_bioterium_1"); 
Item.createItem("crystal_little_bioterium_1", "Crystal bioterium", {name: "crystal_bioterium_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_bioterium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.bioterium_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_bioterium); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_bioterium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_bioterium", function(coords, blockID){
    return [[ItemID.crystal_little_bioterium_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_bioterium", function(coords, blockID){
    return [[ItemID.crystal_little_bioterium_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_bioterium){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_bioterium){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_neon");
Block.createBlock("crystal_little_neon",[{name: "Crystal Neon", texture: [["crystal_neon_bottom", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_neon, "stone", 1);

IDRegistry.genBlockID("crystal_big_neon");
Block.createBlock("crystal_big_neon",[{name: "Crystal Neon", texture: [["crystal_neon_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_neon, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_neon, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_neon, -1,CRYSTAL);
TileRenderer.setPlantModel(BlockID.crystal_big_neon, 0, "crystal_neon_top", 0);
TileRenderer.setPlantModel(BlockID.crystal_little_neon, 0, "crystal_neon_bottom", 0);


IDRegistry.genItemID("crystal_little_neon_1"); 
Item.createItem("crystal_little_neon_1", "Crystal neon", {name: "crystal_neon_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_neon_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.neon_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_neon); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_neon);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_neon", function(coords, blockID){
    return [[ItemID.crystal_little_neon_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_neon", function(coords, blockID){
    return [[ItemID.crystal_little_neon_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_neon){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_neon){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("retium_brick");
Block.createBlock("retium_brick",[{name: "Retium brick", texture: [["retium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.retium_brick, "stone", 1);

/*IDRegistry.genBlockID("alutinum_brick");
Block.createBlock("alutinum_brick",[{name: "Alutinum brick", texture: [["alutinum_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.alutinum_brick, "stone", 1);*/

IDRegistry.genBlockID("wakurium_brick");
Block.createBlock("wakurium_brick",[{name: "Wakurium brick", texture: [["wakurium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.wakurium_brick, "stone", 1);

IDRegistry.genBlockID("quantanium_brick");
Block.createBlock("quantanium_brick",[{name: "Quantanium brick", texture: [["quantanium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.quantanium_brick, "stone", 1);

IDRegistry.genBlockID("bioterium_brick");
Block.createBlock("bioterium_brick",[{name: "Bioterium brick", texture: [["bioterium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.bioterium_brick, "stone", 1);

IDRegistry.genBlockID("neon_brick");
Block.createBlock("neon_brick",[{name: "Neon brick", texture: [["neon_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.neon_brick, "stone", 1);

IDRegistry.genBlockID("baluminium_block");
Block.createBlock("baluminium_block",[{name: "Baluminium block", texture: [["baluminium_block", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.baluminium_block, "stone", 1);

IDRegistry.genBlockID("bbioterium_block");
Block.createBlock("bbioterium_block",[{name: "bbioterium block", texture: [["bbioterium_block", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.bbioterium_block, "stone", 1);