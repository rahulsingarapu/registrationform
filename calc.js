function si()
{
    var p = parseInt(document.getElementById("p").value);
    var r = parseInt(document.getElementById("r").value);
    var t = parseInt(document.getElementById("t").value);
    var si =p*r/100*t;
    document.getElementById("res").innerHTML=si.toFixed(2);
    
}