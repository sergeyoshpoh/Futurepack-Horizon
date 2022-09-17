ModAPI.addAPICallback("SpacesAPI", function(api){
	EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, ft);
	EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, ft);
	ft.registerWire(BlockID.enclosed_heavy_aluminum_wire, 400);
	    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, ft);
});

ModAPI.addAPICallback("ICore", function(api){
	EnergyTileRegistry.addEnergyTypeForId(BlockID.semifluidGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.solarPanel, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.primalGenerator, ft);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.electricHeatGenerator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.rtGenerator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.solidHeatGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.recycler, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.metalFormer, ft);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.oreWasher, ft);
                    EnergyTileRegistry.addEnergyTypeForId(BlockID.thermalCentrifuge, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.blastFurnace, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.icFermenter, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.massFabricator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.stirlingGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.ironFurnace, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.nuclearReactor, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageBatBox, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageCESU, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFE, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFSU, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerHV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerLV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerEV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.electricFurnace, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.inductionFurnace, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.macerator, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.compressor, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.extractor, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.canner, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.solidCanner, ft);
        });
