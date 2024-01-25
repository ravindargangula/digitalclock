function clock(){
    var d=new Date();
    document.getElementById("demo").innerHTML=d.toLocaleTimeString();
}
function stopme(){
    clearInterval(ravi);
}
var ravi=setInterval(clock,10);