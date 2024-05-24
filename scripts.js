document.addEventListener("DOMContentLoaded", () => {
    const scrollToBottomButton = document.getElementById("scrollToBottom");
    const scrollToTopButton = document.getElementById("scrollToTop");

    scrollToBottomButton.addEventListener("click", () => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });

    const comicSection = document.getElementById("comic-section");
    const numberOfPages = 51;
    const pageFolder = "./pages/";

    for (let i = 1; i <= numberOfPages; i++) {
        const img = document.createElement("img");
        img.src = `${pageFolder}epizod${i}.jpg`;
        img.alt = `Epizod ${i}`;
        comicSection.appendChild(img);
    }
});

