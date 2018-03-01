var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.postgres;

var Schemas = ["TamoUser"];

// for (i = 0; i < Schemas.length; i++) { 
//   console.log(Schemas[i] + ' Creating')
//   ds.isActual(Schemas[i], function(err) {
//     ds.autoupdate(Schemas[i], function(err) {
//       if (err){ 
//         console.log(err)
//         throw err;
//       }
//     });
//   });
//   ds.disconnect();
// }

ds.isActual("TamoUser", function(err) {
  ds.autoupdate("TamoUser", function(err) {
    if (err){ 
      console.log(err)
      throw err;
    }
    ds.disconnect();
  });
});