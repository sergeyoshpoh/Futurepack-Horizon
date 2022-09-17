let ingots = ["bioterium_ingot","ingot_lithium","ingot_bitripentium","ingot_neodymium","retium_ingot","ingot_quantanium","ingot_seltenerde","glowtit_ingot","neon_ingot","ingot_wakurum","kupferbarren","zinnbarren", "ingot_wakurum_or_something_else", "ingot_gadolinium"];
let bIngots = ["Biotherium ingot","Lithium ingot","Bitripentium ingot","Neodymium ingot","Retium ingot","Ingot quantium","Seltenerde ingot","Glowtit ingot","Neon ingot","Wakurum ingot","Kupferbarren","Zinnbarren", "Ingot wakurum or something else", "Ingot gadolinium"];
for(var i in ingots){
let ing = ingots[i];
let bIng = bIngots[i];
IDRegistry.genItemID(ing); 
Item.createItem(ing, bIng, {name: ing, meta: 0}, {stack: 64});

};
let dusts = ["aluminium","iron","obsidian","tin","glowtite","magnet","bioterium","zinc","neon","staub","gold","copper","quantanium","retium"]
let bDust = ["Aluminum","Iron","Obsidian","Tin","Glowtite","Magnet","Bioterium","Zinc","Neon","Staub","Gold","Copper","Quantanium","Retium"]
for(var i in dusts){
let d = dusts[i];
let bd = bDust[i]
IDRegistry.genItemID("dust_" + d); 
Item.createItem("dust_" + d,bd + " dust", {name: "dust_" + d, meta: 0}, {stack: 64});
}