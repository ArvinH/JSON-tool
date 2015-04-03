JSON-tool
=========

some tools that manipulate with json


getJSON
=========
Goal: simple tool for getting json data from given url and save to file  

Usage: node getJSON.js "url" "filename"  

simple-csvtojson
=========
Goal: convert simple csv file to json 

Usage: npm install simple-csvtojson

<pre><code>
var csvTojson = require('simple-csvtojson');
csvTojson('/path/to/csv/file')
</code></pre>
It will print out json output

csv file example:

header1,header2,header3
value1,value2,value3

