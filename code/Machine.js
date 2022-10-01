let MultiBlock = {
	register(){
		
	}
};
FactAPI.machine = {
	registerEnergtTileAnimation(id, tile, obj){
		tile.client = tile.client || {};
		let load = tile.client.load||function(){};
		tile.client.load = function(){
			let thas = this;
			TileRenderer.mapAtCoords(thas.x, thas.y, thas.z, id, BlockSource.getCurrentClientRegion().getBlockData(this.x, this.y, this.z));
			this.networkData.addOnDataChangedListener(function(data, isExternal){
				let data = thas.networkData.getInt("data");
				TileRenderer.mapAtCoords(thas.x, thas.y, thas.z, id, data);
			});
			load();
		}
		let unload = tile.client.unload||function(){};
		tile.client.unload = function(){
			BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
			unload();
		}
		tile.getAnimation = tile.getAnimation || function(d){return d};
		tile.updateAnimation = function(){
			let data = this.blockSource.getBlockData(this.x, this.y, this.z);
			this.networkData.putInt("data", this.getAnimation(data));
			this.networkData.sendChanges();
		}
		this.registerEnergyTile(id, tile, obj);
	},
	registerEnergyTile(id, tile, description){
		description = description||{};
		tile.defaultValues = tile.defaultValues || {};
		tile.defaultValues.energy = 0;
		tile.defaultValues.energy_storage = tile.defaultValues.energy_storage || 1000;
		tile.getEnergyStorage = tile.getEnergyStorage || function(){return this.data.energy_storage;};
		
		tile.defaultValues.active = true;
		
		tile.getTier = tile.getTier || function(){
			return 3;
		}
		
		if(description.liquid)
			ICRender.getGroup("liquid_pipe").add(id, -1);
		
		if(!description.generator)
			tile.energyReceive = tile.energyReceive || FactAPI.machine.basicEnergyStorage;
			
		ModAPI.addAPICallback("ICore", function(api){
			if(!description.generator && api.Config.voltageEnabled)
				tile.energyReceive = FactAPI.machine.industrialCraft;
		});
		
		let getScreenName = tile.getScreenName||function(){return "main";};
		tile.getScreenName = function(p, c){
			let item = Entity.getCarriedItem(p);
			if(ItemType.is(item.id,"wrench")){
				this.data.active=!this.data.active;
				return;
			}
			return getScreenName.apply(this, [p, c]);
		}
		
		let click = tile.click || function(){};
		tile.click = function(d, count, data, coords, player){
			if(Entity.getSneaking(player) && ItemType.is(d,"wrench")){
				this.blockSource.spawnDroppedItem(this.x+.5, this.y+.5, this.z+.5, id, 1, 0);
				this.blockSource.destroyBlock(this.x, this.y, this.z, true);
			}else
				click.apply(this, arguments);
		}
		
		let tick = tile.tick||function(){};
		tile.MechanicDeploy = tile.MechanicDeploy||function(){};
  if(__config__.getBool("machine_particle")){
		tile.tick = function(){
StorageInterface.checkHoppers(this);
			tick.apply(this, []);
			this.container.sendChanges();
			if(!this.data.active)
				return;
			Mp.spawnParticle(Native.ParticleType.redstone, this.x+Math.random(), this.y+Math.random(), this.z+Math.random(), 0, .0001);
			
			this.MechanicDeploy();
		}
   }else{
   tile.tick = function(){
StorageInterface.checkHoppers(this);
			tick.apply(this, []);
			this.container.sendChanges();
			if(!this.data.active)
				return;
			this.MechanicDeploy();
		}
}
		if(description.updates){
			Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
				for(let i = 0;i < description.updates.length-1;i++){
					if(description.updates[i] == block.id){
						if(item.id != description.update_items[i])
							return;
						BlockSource.getDefaultForActor(player).setBlock(coords.x, coords.y, coords.z, description.updates[i+1], block.data)
						Entity.setCarriedItem(player, item.id, item.count-1, item.data, item.extra);
					}
				}
			});
			for(let i in description.updates){
				let _tile = ModAPI.cloneObject(tile, true, 3);
				let ii = parseInt(i);
				_tile.getTierBlock = function(){
					return ii+1;
				}
				TileEntity.registerPrototype(description.updates[i], _tile);
				EnergyTileRegistry.addEnergyTypeForId(description.updates[i], EU);
				EnergyTileRegistry.addEnergyTypeForId(description.updates[i], RF);
				FactAPI.render.addStandartWireConnections(description.updates[i]);
			}
		}else{
			TileEntity.registerPrototype(id, tile);
			EnergyTileRegistry.addEnergyTypeForId(id, EU);
			EnergyTileRegistry.addEnergyTypeForId(id, RF);
			FactAPI.render.addStandartWireConnections(id);
		}
	},
	basicEnergyStorage(type, amount) {
		amount = Math.min(amount, 1000);
		var add = Math.min(amount, this.data.energy_storage - this.data.energy);
		this.data.energy += add;
		return add;
	},
	industrialCraft(type, amount, voltage){
		let maxVoltage = 8 << this.getTier() * 2;
		if(voltage > maxVoltage){
			this.blockSource.setBlock(this.x, this.y, this.z, 0, 0);
			this.blockSource.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 1, true);
			return 1;
		}
		amount = Math.min(amount, maxVoltage);
		let add = Math.min(amount, this.data.energy_storage - this.data.energy);
		this.data.energy += add;
		return add;
	},
	addConnectWire(id, group, data){
		ICRender.getGroup(group).add(id, data|| -1);
	},
	updates: {},
	registerUpdate(block, id, description){
		this.updates[block] = this.updates[block]||{};
		
		description.timer = description.timer||0;
		description.height = description.height||0;
		
		this.updates[block][id] = description||{};
	},
	getUpdates(block){
		return this.updates[block];
	},
	isUpdateBlock(block, id){
		this.updates[block] = this.updates[block]||{};
		return !!this.updates[block][id];
	},
	registerDefaultUpdate(block){
		this.registerUpdate(block, 359, {
			timer: .5
		});
		this.registerUpdate(block, ItemID.gearIron, {
			timer: .1
		});
		this.registerUpdate(block, ItemID.gearGolden, {
			timer: .2,
			height: 2
		});
		this.registerUpdate(block, ItemID.gearDiamond,{
			timer: .4,
			height: 4
		});
	},
	registerTile(id, tile){
		this.registerDefaultUpdate(id);
		
		tile.defaultValues = tile.defaultValues || {};
		tile.defaultValues.active = true;
		
		let getScreenName = tile.getScreenName||function(){return "main";};
		tile.getScreenName = function(p, c){
			let item = Entity.getCarriedItem(p);
			if(ItemType.is(item.id,"wrench")){
				this.data.active=!this.data.active;
				return;
			}
			return getScreenName.apply(this, [p, c]);
		}
		let click = tile.click || function(){};
		tile.click = function(d, count, data, coords, player){
			if(Entity.getSneaking(player) && ItemType.is(d,"wrench")){
				this.blockSource.spawnDroppedItem(this.x+.5, this.y+.5, this.z+.5, id, 1, 0);
				this.blockSource.destroyBlock(this.x, this.y, this.z, true);
			}else
				click.apply(this, arguments);
		}
		
		let tick = tile.tick||function(){};
   if(__config__.getBool("machine_particle")){
		tile.tick = function(){
StorageInterface.checkHoppers(this);
			tick.apply(this, []);
			let cfg = this.getConfig();
		
			if(!this.data.active)
				return;
			Mp.spawnParticle(Native.ParticleType.redstone, this.x+Math.random(), this.y+Math.random(), this.z+Math.random(), 0, .0001);
			
			this.data.modY=0;
			this.data.modTime=0;
		
			let updates = FactAPI.machine.getUpdates(id);
			this.data.cfg = this.data.cfg || {};
			for(let i=1;i<=7;i++){
				slotU=this.container.getSlot("slotU"+i);
				if(updates[slotU.id]){
					let obj = updates[slotU.id];
					this.data.modTime+=obj.timer;
					this.data.modY+=obj.height;
					let keys = Object.keys(obj);
					for(let i in keys){
						let key = keys[i];
						this.data.cfg[key] = (this.data.cfg[key]||0) + obj[cfg];
					}
				}
			}
		
			let add = 1+this.data.modTime;
			this.data.progress+=add;
		
			if(this.data.progress>=cfg.time){
				this.MechanicDeploy();
				this.data.progress=0;
			}
			this.container.sendChanges();
		}
  }else{
   tile.tick = function(){
			tick.apply(this, []);
			let cfg = this.getConfig();
		
			if(!this.data.active)
				return;
			
			this.data.modY=0;
			this.data.modTime=0;
		
			let updates = FactAPI.machine.getUpdates(id);
			this.data.cfg = this.data.cfg || {};
			for(let i=1;i<=7;i++){
				slotU=this.container.getSlot("slotU"+i);
				if(updates[slotU.id]){
					let obj = updates[slotU.id];
					this.data.modTime+=obj.timer;
					this.data.modY+=obj.height;
					let keys = Object.keys(obj);
					for(let i in keys){
						let key = keys[i];
						this.data.cfg[key] = (this.data.cfg[key]||0) + obj[cfg];
					}
				}
			}
		
			let add = 1+this.data.modTime;
			this.data.progress+=add;
		
			if(this.data.progress>=cfg.time){
				this.MechanicDeploy();
				this.data.progress=0;
			}
			this.container.sendChanges();
		}
  }
		
		ToolAPI.registerBlockMaterial(id, "stone");
		TileEntity.registerPrototype(id, tile);
	}
};
