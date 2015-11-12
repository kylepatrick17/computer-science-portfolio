var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

item1.addEventListener("click", function(){
    info1.innerHTML = "This soccer ball reperesents when I first really started watching soccer.";
    info2.innerHTML = "";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Item 2 stuff";
    info2.innerHTML = "Item 2 other stuff";
});
                       