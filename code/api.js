ModAPI.registerAPI("FuturepackAPI", {
    requireGlobal: function(command){
    	Futurepack: Futurepack
  return eval(command);
 }
});

let Futurepack = {}