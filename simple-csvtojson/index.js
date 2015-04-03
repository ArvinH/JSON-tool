//var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length-1;i++){
	    var obj = {};
	    var currentline=lines[i].split(",");
	    if (currentline.length != 1){
	       for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	       }
	       result.push(obj);
            }
            else if (currentline.length == 1 && currentline[currentline.length-1] != ''){
               for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	       }
	       result.push(obj);
            }
  }
  
  //return result; //JavaScript object
  return JSON.stringify(result, null, 4); //JSON
}
module.exports = function(filepath, outputfilepath){
var fs = require('fs');
var Data ='';
fs.readFile(filepath, 'utf8', function (err,data) {
     if (err) {
            return console.log(err);
     }
     fs.writeFile(outputfilepath,csvJSON(data),'utf8', function(err,data){
         if (err) {
            return console.log(err);
         } 
      });
});
};
