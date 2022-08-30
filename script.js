let to_click_div = document.getElementById("hamburger");

let to_reveal_div = document.getElementById("secondary_nav");



to_click_div.onclick = my_func;

function my_func(){
 
    to_reveal_div.classList.toggle("menu_hidden");

}


