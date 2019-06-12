document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("mobile-anchor-container").style.display="flex";
});

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("mobile-documents-link").addEventListener("click", function(){
        document.getElementById("mobile-anchor-container").style.display="none";

    });
    document.getElementById("documents-icon").addEventListener("click", function(){
        document.getElementById("mobile-anchor-container").style.display="none";
    });

});


var tl = new TimelineLite();

var documentsLink = document.getElementById("mobile-documents-link");
var documentsIcon = document.getElementById("documents-icon");


documentsLink.onclick = function() {
    tl.to(window, 1.5, {scrollTo:"#footer"});
};
documentsIcon.onclick = function() {
    tl.to(window, 1.5, {scrollTo:"#footer"});
};





