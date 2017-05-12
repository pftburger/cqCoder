var qr = require('qr-image')
var mkdirp = require('mkdirp');
    
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

mkdirp('images', function (err) {
    if (err) console.error(err)
});


for (i = 0; i < 200; i++){
	var id = pad(i,10);
	var qr_svg = qr.image(id,{type : "svg"});
	qr_svg.pipe(require('fs').createWriteStream("images/"+id+'.svg'));
}