function setModelChest(id){
  chest_1(null, id, 0).setBlockModel(id, 0);
  chest_0(null, id, 1).setBlockModel(id, 1);
  chest_3(null, id, 2).setBlockModel(id, 2);
  chest_2(null, id, 3).setBlockModel(id, 3);
 }
IDRegistry.genBlockID("composite_chest");
Block.createBlockWithRotation("composite_chest", [{
    name: "Composite Chest",
    texture: [
        ["composite_chest_top", 0],
        ["composite_chest_top", 0],
        ["composite_chest_side", 0],
        ["composite_chest_front", 0],
        ["composite_chest_side", 0],
        ["composite_chest_side", 0]
    ],
    inCreative: true
}]);

var compChestUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Composite Chest"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [{
        type: "background",
        color: android.graphics.Color.parseColor("#b3b3b3")
    }],
	
    elements: {
        slot1: {
            type: "slot",
            x: 350,
            y: 40,
            size: 50
        },
        slot2: {
            type: "slot",
            x: 400,
            y: 40,
            size: 50
        },
        slot3: {
            type: "slot",
            x: 450,
            y: 40,
            size: 50
        },
        slot4: {
            type: "slot",
            x: 500,
            y: 40,
            size: 50
        },
        slot5: {
            type: "slot",
            x: 550,
            y: 40,
            size: 50
        },
        slot6: {
            type: "slot",
            x: 600,
            y: 40,
            size: 50
        },
        slot7: {
            type: "slot",
            x: 650,
            y: 40,
            size: 50
        },
        slot8: {
            type: "slot",
            x: 700,
            y: 40,
            size: 50
        },
        slot9: {
            type: "slot",
            x: 750,
            y: 40,
            size: 50
        },

        slot10: {
            type: "slot",
            x: 350,
            y: 90,
            size: 50
        },
        slot11: {
            type: "slot",
            x: 400,
            y: 90,
            size: 50
        },
        slot12: {
            type: "slot",
            x: 450,
            y: 90,
            size: 50
        },
        slot13: {
            type: "slot",
            x: 500,
            y: 90,
            size: 50
        },
        slot14: {
            type: "slot",
            x: 550,
            y: 90,
            size: 50
        },
        slot15: {
            type: "slot",
            x: 600,
            y: 90,
            size: 50
        },
        slot16: {
            type: "slot",
            x: 650,
            y: 90,
            size: 50
        },
        slot17: {
            type: "slot",
            x: 700,
            y: 90,
            size: 50
        },
        slot18: {
            type: "slot",
            x: 750,
            y: 90,
            size: 50
        },


        slot19: {
            type: "slot",
            x: 350,
            y: 140,
            size: 50
        },
        slot20: {
            type: "slot",
            x: 400,
            y: 140,
            size: 50
        },
        slot21: {
            type: "slot",
            x: 450,
            y: 140,
            size: 50
        },
        slot22: {
            type: "slot",
            x: 500,
            y: 140,
            size: 50
        },
        slot23: {
            type: "slot",
            x: 550,
            y: 140,
            size: 50
        },
        slot24: {
            type: "slot",
            x: 600,
            y: 140,
            size: 50
        },
        slot25: {
            type: "slot",
            x: 650,
            y: 140,
            size: 50
        },
        slot26: {
            type: "slot",
            x: 700,
            y: 140,
            size: 50
        },
        slot27: {
            type: "slot",
            x: 750,
            y: 140,
            size: 50
        },

        slot28: {
            type: "slot",
            x: 350,
            y: 190,
            size: 50
        },
        slot29: {
            type: "slot",
            x: 400,
            y: 190,
            size: 50
        },
        slot30: {
            type: "slot",
            x: 450,
            y: 190,
            size: 50
        },
        slot31: {
            type: "slot",
            x: 500,
            y: 190,
            size: 50
        },
        slot32: {
            type: "slot",
            x: 550,
            y: 190,
            size: 50
        },
        slot33: {
            type: "slot",
            x: 600,
            y: 190,
            size: 50
        },
        slot34: {
            type: "slot",
            x: 650,
            y: 190,
            size: 50
        },
        slot35: {
            type: "slot",
            x: 700,
            y: 190,
            size: 50
        },
        slot36: {
            type: "slot",
            x: 750,
            y: 190,
            size: 50
        }
    }
});
setModelChest(BlockID.composite_chest);
TileEntity.registerPrototype(BlockID.composite_chest, {
useNetworkItemContainer: true,
getScreenName(player, coords){
return "main";
},
getScreenByName(){
return compChestUI;
},
});
