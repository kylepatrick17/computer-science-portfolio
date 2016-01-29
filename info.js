var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var item3 = document.getElementById("item3");
var info3 = document.getElementById("info3");
var item4 = document.getElementById("item4");
var info4 = document.getElementById("info4");

item1.addEventListener("click", function(){
    info1.innerHTML = "This soccer ball reperesents when I first really started watching soccer.";
    info2.innerHTML = "Skyrim takes days of literally non stop play to complete fully";
    info3.innerHTML = "Football Manager is the best soccer video game in the world.";
    info4.innerHTML = "Charlie gets along well with people, dogs, and cats.";
}); //when you click on the 1st image it brings up new information for each of the images.
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "I've played soccer since I was three.";
    info2.innerHTML = "This is skyrim it is the first game I played that had good graphics and it was a really good game.";
    info3.innerHTML = "Football manager is immensly popular in Europe.";
    info4.innerHTML = "Charlie is from Oakdale animal shelter where the picture is taken.";
}); //when you click on the 2nd image it brings up new information for each of the images.
item3.addEventListener("click", function(){
    info1.innerHTML = "My favorite team is Arsenal.";
    info2.innerHTML = "Skyrim is a massive game.";
    info3.innerHTML = "Football manager is my favorite simulation game it is really robust and is very immersing.";
    info4.innerHTML = "My dog is named Charlie.";
}); //when you click on the 3rd image it brings up new information for each of the images.
item4.addEventListener("click", function(){
    info1.innerHTML = "My favorite player is Serge Gnabry";
    info2.innerHTML = "Skyrim is an old favorite of mine.";
    info3.innerHTML = "Football manager has a really friendly and interactive community.";
    info4.innerHTML= "Charlie plays fetch."
    //when you click on the 4th image it brings up new information for each of the images.
});