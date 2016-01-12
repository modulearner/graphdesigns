var files = [];
var fs = require('fs');

process.argv.forEach(function (val, index, array) {

    if (index == 0 || index == 1 ||  index == process.argv.length - 1){
        return;
    } else{
        files.push(val);
    }
    
});

var graph = { "nodes" : [] };

for (file in files){
    var jsonBlob;
    console.log(files[file]);
    jsonBlob = JSON.parse(fs.readFileSync(files[file], 'utf8'));
    graph["nodes"] = graph["nodes"].concat(jsonBlob["nodes"]);
}

console.log(graph);

fs.writeFile(process.argv[process.argv.length - 1], JSON.stringify(graph), function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

