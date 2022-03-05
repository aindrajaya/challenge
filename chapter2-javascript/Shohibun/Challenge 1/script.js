document.addEventListener(doubleClick);

function doubleClick() {
    var text = document.getElementById("teks");
    if (text.style.display === "none") {
        text.style.display = "block";
    }

    else {
        text.style.display = "none";
    }
};
