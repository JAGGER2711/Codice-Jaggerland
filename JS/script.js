const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 564,
    height: 900,

    size: "stretch",

    minWidth: 280,
    maxWidth: 564,

    minHeight: 450,
    maxHeight: 900,

    showCover: true,
    usePortrait: true,

    autoSize: true,
    mobileScrollSupport: true
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));