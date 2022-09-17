//Важнейший аспект мода
IDRegistry.genItemID("E_scanner"); 
Item.createItem("E_scanner", "E scanner", {name: "e_scanner", meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID.E_scanner, function(item, name){
    return Native.Color.GOLD + name + "\n§7" + "Изучайте различные химические соединения\n,и приобретайте навыки.\nДля изучения тыкайте по обьекту";
});
let E_SCANNER = new UI.Container();
let L_SCANNER = new UI.Container();
Item.registerUseFunction("E_scanner", function(coords, item, block, player) {
	E_SCANNER.openAs(SCANNER_E)
	L_SCANNER.close();
});
var SCANNER_E = new UI.Window({
	location: {
    	x: 330/ 1.1 - 22.4,
        y: 260,
        width: 387,
        height: 560
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"escanner", scale: 5.2,x: 0,y: 10}],
    elements: {
        "closeButton": {
        	type: "closeButton", 
			x: 80, 
			y: 1008, 
			scale: 5.5,
			bitmap:"futurevoid"
		},        "learning": {
        	type: "button",
			x: 153, 
			y: 780, 
			scale: 5.4,
			bitmap:"paper_learning",clicker: {onClick: function(){E_SCANNER.close(); L_SCANNER.openAs(SCANNER_L)
			}}
		},
     }
  }
);
let group = new UI.WindowGroup();
/*group.addWindowInstance("research_bg",SCANNER_L);*/

let SCANNER_L = new UI.Window({
	location: {
    	x: 290 / 1.1 - 22.4,
        y: 0,
        width: 470,
        height: 1100,
      /*  scrollX: 1000,
        scrollY: 1000*/
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"research_bg",scale: 2.3},{type:"bitmap",x:60,y:60,scale:4,bitmap:"slot_bg"}],
    elements:{
	"stars": 
	{type: "button",
	bitmap:"research_overlay", 
	scale: 3.9,x: 0,y: 0},"back": 
	{type: "button",
	bitmap:"e_scanner", 
	scale: 4.3,x: 70,y: 72,clicker:{onClick: function(){L_SCANNER.close(); E_SCANNER.openAs(SCANNER_E)}}}, "bgbutton":
{type: "button", 
x: 150, 
y: 56,
scale:2.0,
bitmap:"overlay_researching",
     clicker: 
{onClick: function(container){
	/*let content = container.getGuiContent();
	
	content.elements["stars"].y += .1;
	content.elements["stars"].y -= .1;
	content.elements["fon"].y += 6;*/
}}},}
     /*   "closeButton": {
        	type: "closeButton", 
			x: 80, 
			y: 1008, 
			scale: 5.5,
			bitmap:"futurevoid"
		},        "learning": {
        	type: "button", 
			x: 110, 
			y: 745, 
			scale: 5.3,
			bitmap:"paper_learning"
		},*/
     
  }
);
/*group.addWindowInstance("SCANNER_L", SCANNER_L);*/