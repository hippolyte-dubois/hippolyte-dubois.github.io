var arr = "$$$MEME".split('');
var n = 100;
var t = 0;
var rate = 500;
function display(){
    var bandeaux = document.getElementsByClassName("bandeau");
    var offset = 0;
    Array.prototype.forEach.call(bandeaux, function(el) {
        var s = "";
        for(i = t + offset ; i - t - offset < n ; i++){
            s = s.concat(arr[i % arr.length]);
        }
        el.innerHTML = s;
        offset += 2;
    }); 
    t++;
    var c = setTimeout(display, rate);

}