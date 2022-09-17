let ram_n = [0,1,2,3,4,5 ,6 ,7];
let processor_n = [8,9,10,11,12,13,14,15];
for(var i in processor_n){
let core = processor_n[i];
IDRegistry.genItemID("core"); 
Item.createItem("core", "Entronium core", {name: "core", meta: 8}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.core, "core", 8, [core]);

};

for(var i in ram_n){
	let ram = ram_n[i];
	IDRegistry.genItemID("ram"); 
Item.createItem("ram", "Entronium ram", {name: "ram", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.ram, "ram", 0, [ram]);
};
IDRegistry.genItemID("spawn_note"); 
Item.createItem("spawn_note", "A note", {name: "spawn_note", meta: 0}, {stack: 1});
let SPN = new UI.Container();
Item.registerUseFunction("spawn_note", function(coords, item, block, player) {
	SPN.openAs(SPAWNOTE)
});
var SPAWNOTE = new UI.Window({
	location: {
    	x: 310/ 1.1 - 22.4,
        y: 260,
        width: 435,
        height: 560
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"spawnnote", scale: 4.0,x: 0,y: 5}],
    elements: {
       "closeButton": {type: "closeButton", x: 0, y: 100, global: false, bitmap: "futurevoid", scale: 1000 },
     }
  }
);
let statuses = ["Core: Unworking","Ram: Unworking","Core: 1\nMax Temp: 175.0",
"Core: 2\nMax Temp: 200.0","Core: 3\nMax Temp: 250.0","Core: 4\nMax Temp: 275.0","Core: 5\nMax Temp: 850.0","Core: 7\nMax Temp: 450.0","Core: 7\nMax Temp: 1100.0","Core: 2\nMax Temp: 2100.0","Core: 0\nMax Temp: 10000.0",//"Core: 10\nMax Temp: 100000.0",
"Ram: 1.0\nCorepower: 1\nMax. Temp:150.0"]
IDRegistry.genItemID("videocore"); 
Item.createItem("videocore", "Video core", {name: "videocore", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.videocore, "videocore", 1, [0,1]);
let cores = ["toasted_core","toasted_ram","standart_core","a1_core","p2_core","tct_core","master_core","non_core","dungeon_core","univ_core","zombie_core","standart_ram","a_ram","p_ram","tct_ram","master_ram","non_ram","dungeon_ram","univ_ram","zombie_ram","toasted_chip","support_chip","ultimate_chip","navigation_chip","logic_chip","network_chip","chip_transport","industrie_chip","tactic_chip","damage_control_chip","ai_chip","fragment_core","double_machine_board","machine_board","a_i_flash_speicher_a","a_i_flash_speicher_b","a_i_flash_speicher_c","a_i_flash_speicher_d","a_i_flash_speicher_e","a_i_flash_speicher_f"];

let coresName = ["Toasted core","Toasted RAM","Standart core","Alon I Core","Penton II Core","TCT Core","Master Mind Core","NoN Core","Dungeon Heart Core","Torus Core","Zombie Core","Standard RAM","Alon RAM","Penton RAM","TCT RAM","Master RAM","NoN Ram","Dungeon RAM","Torus RAM","Zombie RAM","Toasted CHIP","Support CHIP","Ultimate CHIP","Navigation CHIP","Logic CHIP","Network CHIP","Transport CHIP","Industrial CHIP","Tactic CHIP","Damage Control CHIP","AI CHIP","Fragment Core","Double Machine Board","Machine Board","Flash Speicher 0","Flash Speicher 1","Flash Speicher 2","Flash Speicher 3","Flash Speicher 4","Flash Speicher 5"];
for(var i in cores){let a = cores[i];
	let b = coresName[i];
	IDRegistry.genItemID(a); 
Item.createItem(a, b, {name: a, meta: 0}, {stack: 1});
};