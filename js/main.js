


function show_list() {
    var show = document.getElementById("drop-list");
    var arrow = document.getElementById("caret-down-1");
    
    arrow.style.transform = "rotate(180deg)";
    
    if (show.style.display == "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }
    
}
function show_list_2() {
    var show_2 = document.getElementById("drop-list-2");
    var arrow = document.getElementById("caret-down-2");
    
    arrow.style.transform = "rotate(180deg)";

    if (show_2.style.display == "block") {
        show_2.style.display = "none";
        
    } else {
        show_2.style.display = "block";
    }
}
function show_list_3() {
    var show_3 = document.getElementById("drop-list-3");
    var arrow = document.getElementById("caret-up-1");
    if (show_3.style.display == "none") {
        show_3.style.display = "block";
    } else {
        show_3.style.display = "none";
    }
    arrow.style.transform = "rotate(180deg)";
}
function show_list_4() {
    var show_4 = document.getElementById("drop-list-4");
    var arrow = document.getElementById("caret-up-2");
    if (show_4.style.display == "none") {
        show_4.style.display = "block";
    } else {
        show_4.style.display = "none";
    }

    arrow.style.transform = "rotate(180deg)";

}
/*
window.onclick = function (event) {
    if (event.target.matches('.drop-click')) {
        var drop = document.getElementById('drop-list')
        if (drop.style.display == "block") {
            drop.style.display = "none";
        } else {
            drop.style.display = "block";
        }

    }
}
window.onclick = function (event) {
   if (!event.target.matches('.drop-click')) {
        var drop = document.getElementById('drop-list')
        drop.style.display = "block";

    }
} */

function night_mode(){
    var body = document.body;
    var img = document.getElementById("mode-toggle-img");    
    var navbar_AM = document.getElementById("nav-link-AM");
    var navbar_MS = document.getElementById("nav-link-MS");
    var navbar_MWH = document.getElementById("nav-link-MWH");
    var navbar_CM = document.getElementById("nav-link-CM");

    if(body.classList.toggle("dark")){
       img.src="img/toggle-light.png"; 
       navbar_AM.style.color="white"; 
       navbar_MS.style.color="white"; 
       navbar_MWH.style.color="white"; 
       navbar_CM.style.color="white"; 
    }else{
        img.src="img/mode-switch.png";
        navbar_AM.style.color="#2f2f2f"; 
        navbar_MS.style.color="#2f2f2f"; 
        navbar_MWH.style.color="#2f2f2f"; 
        navbar_CM.style.color="#2f2f2f"; 
    }

    
    
}