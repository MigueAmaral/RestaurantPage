
const createRestaurantHP = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant!"
    pageContent.appendChild(headline);

    const image = document.createElement("img");
    image.src = "https://images.pexels.com/photos/1322184/pexels-photo-1322184.jpeg";
    image.height = "300";
    pageContent.appendChild(image);

    const copy = document.createElement("p");
    copy.textContent = "Best restaurant in the world! Come and visit us";
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
}

export default createRestaurantHP;