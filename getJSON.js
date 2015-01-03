/*
 * @author Arvin
 * @date 2015/01/03
 * */
var request = require('request');
var fs = require('fs');

var args = process.argv.slice(2);


function callback(error, response, body){
   var data = JSON.parse(body);
   var response = data["response"];
   fs.writeFile(args[1], JSON.stringify(response, null, 4), function(err) {
          if(err) {
             console.log(err);
          } else {
             console.log("The file was saved!");
          }
   }); 
} 

(function(){
   if (args.length != 2){
      console.error("The input format is: node getJSON.js url filename");
   }
   else{
      request({
         url: args[0],
         method: "GET"
      },callback);
   }
})();
