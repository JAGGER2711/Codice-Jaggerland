const book = document.getElementById("book");

function getBookSize() {
    const isMobile = window.innerWidth <= 600;

    if (isMobile) {
        const maxWidth = window.innerWidth * 0.92;
        const maxHeight = window.innerHeight * 0.90;

        const ratio = 564 / 900;

        let height = maxHeight;
        let width = height * ratio;

        if (width > maxWidth) {
            width = maxWidth;
            height = width / ratio;
        }

        return {
            width: Math.round(width),
            height: Math.round(height)
        };
    }

    return {
        width: 564,
        height: 900
    };
}

let size = getBookSize();

const pageFlip = new St.PageFlip(book, {
    width: size.width,
    height: size.height,
    size: "fixed",
    showCover: true
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

window.addEventListener("resize", () => {
    const newSize = getBookSize();

    pageFlip.updateFromImages?.();

    book.style.width = `${newSize.width * 2}px`;
    book.style.height = `${newSize.height}px`;
});