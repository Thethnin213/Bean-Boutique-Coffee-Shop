window.addEventListener("load", function () {
    // Any code you want to run on window load

    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display="block"
        },
        1000
    )
});

document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none"; // Correct way to set display to "none"
});
