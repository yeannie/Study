var head = document.querySelector("#head");
head.onclick = function(){
    head.style.color = "red";
}
var now = new Date();
var disp = now.toLocaleTimeString();
document.write("현재시각"+disp);
