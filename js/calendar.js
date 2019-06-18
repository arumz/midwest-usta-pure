document.getElementById("button").addEventListener("click", function() {
    let status = document.getElementById("button").innerHTML;
    if (status === "Show") {
        document.getElementById("committee-container").style.display="flex";
        document.getElementById("button").innerHTML = "Hide";
    }
    else {
        document.getElementById("committee-container").style.display="none";
        document.getElementById("button").innerHTML = "Show";

    }


});