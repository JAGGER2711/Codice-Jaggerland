const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 564,
height: 900,
    size: "fixed",
    showCover: true
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));