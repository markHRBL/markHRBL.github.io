var posts = document.getElementsByClassName("post");
var post_images = document.getElementsByClassName("post-img");
var modal_texts = document.getElementsByClassName("modal_text");
var rm = document.getElementsByClassName("r-more");
var a = 0;
var b = 0;
var c = 0;
var d = 0;

posts[0].onclick = function() {
    rm[0].style.display = "none";
    post_images[0].style.display = "none";
    modal_texts[0].style.display = "block";
    modal_texts[0].innerHTML = "<span style='font-weight: bold;'>block a</span> - text a";
    a += 1;
    if (a == 2){
        modal_texts[0].style.display = "none";
        rm[0].style.display = "block";
        post_images[0].style.display = "block";
        a = 0;
    };
        
};

posts[1].onclick = function() {
    post_images[1].style.display = "none";
    rm[1].style.display = "none";
    modal_texts[1].style.display = "block";
    modal_texts[1].innerHTML = "<span style='font-weight: bold;'>block b</span> - text b";
    b += 1;
    if (b == 2){
        modal_texts[1].style.display = "none";
        post_images[1].style.display = "block";
        rm[1].style.display = "block";
        b = 0;
    };
};

posts[2].onclick = function() {
    post_images[2].style.display = "none";
    rm[2].style.display = "none";
    modal_texts[2].style.display = "block";
    modal_texts[2].innerHTML = "<span style='font-weight: bold;'>block c</span> - text c";
    c += 1;
    if (c == 2){
        modal_texts[2].style.display = "none";
        post_images[2].style.display = "block";
        rm[2].style.display = "block";
        c = 0;
    };
};

posts[3].onclick = function() {
    post_images[3].style.display = "none";
    rm[3].style.display = "none";
    modal_texts[3].style.display = "block";
    modal_texts[3].innerHTML = "<span style='font-weight: bold;'>block d</span> - text d";
    d += 1;
    if (d == 2){
        post_images[3].style.display = "block";
        modal_texts[3].style.display = "none";
        rm[3].style.display = "block";
        d = 0;
    };
};