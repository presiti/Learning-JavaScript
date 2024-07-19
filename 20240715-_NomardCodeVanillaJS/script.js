const body = document.querySelector("body").style;

window.addEventListener("resize", function(event){
    var webWidth = window.innerWidth;
    if(850 >= webWidth && webWidth > 550){
        body.backgroundColor = '#9348b5';
    }
    else if(webWidth > 850){
        body.backgroundColor = '#face0a';
    }
    else{
        body.backgroundColor = "#0398fc";
    };
});