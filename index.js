const electron = require("electron");
const ipc = electron.ipcRenderer;

const valBtn = document.getElementById("valBtn");

valBtn.addEventListener("click", function(){
  ipc.send("value-sent");
});

function takeInput() {
  const temp = document.getElementById("DIC").value;
  console.log(temp);
  compute(temp)
};

function compute(temp) {
  var python = require('child_process').spawn('python', ['./similarity.py',temp]);
  python.stdout.on('data',function(data){
    var new_data = data.toString('utf8');
    newFunction(new_data)
  });
};


function newFunction(val) {
  document.getElementById("output").innerHTML = "Possible values are: <br>" + val;
}
