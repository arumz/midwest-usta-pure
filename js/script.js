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



