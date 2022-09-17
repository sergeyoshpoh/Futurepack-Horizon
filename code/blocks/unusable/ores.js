let ores = ["quartz_erz_m","kohle_erz_m","kupfer_erz","bauxit_erz","zinn_erz","prismid_stone0","prismid_stone3","zink_erz","kupfer_erz_m","prismid_stone2","magnetit_erz","prismid_stone1"];
let bOres = ["Quartz","Kohle","Kupfer","Bauxit","Zinn","Prizmid Stone","Prismid Stone","Zink","Kupfer","Prismid Stone","Magnetit","Prismid stone"];
for(var i in ores){
let ore = ores[i];
let bOre = bOres[i];
IDRegistry.genBlockID(ore);
Block.createBlock(ore, [ {name: bOre, texture: [[ore, 0]], inCreative: true}], iron_block_type)
ToolAPI.registerBlockMaterial(BlockID[ore], "stone", 2);

};
let ob = ["bwakurium","bretium","bquantanium","kupfer","industrial_deko","bneon","zin","zink","bglowtite"]
let obN = ["Bwakurium","Bretium","Bquantanium","Kupfer","Industrial deko","Bneon","Zin","Zink","Bglowtite"]
for(let i in ob){
	let obb = ob[i];
let obNn = obN[i];
IDRegistry.genBlockID(obb + "_block");
Block.createBlock(obb + "_block", [ {name: obNn + " block", texture: [[obb + "_block", 0]], inCreative: true}], iron_block_type)
ToolAPI.registerBlockMaterial(BlockID[obb + "_block"], "stone", 2);

}