
var spawn = require("child_process").spawn;
var process = spawn('python',["python.py", 4, 2]);
var dumb;
function n(a) {
}
process.stdout.on('data', function (data){
	//Something like var content console.log(`${data}`)
	n(`${data}`);
	console.log(`${data}`)

});

console.log(dumb)
