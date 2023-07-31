const createMenu = () => {

    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const headline = document.createElement("h1");
    headline.textContent = "MENU"
    pageContent.appendChild(headline);

    const starters = document.createElement("h3");
    starters.textContent = "Starters"
    pageContent.appendChild(starters);

    const startersCopy = document.createElement("p");
    startersCopy.textContent = "Bread, Olives, Mushrooms, Prawns ";
    pageContent.appendChild(startersCopy);

    const mains = document.createElement("h3");
    mains.textContent = "Mains"
    pageContent.appendChild(mains);

    const mainsCopy = document.createElement("p");
    mainsCopy.textContent = "Lamb, Veal, Cod, Eel";
    pageContent.appendChild(mainsCopy);

    const desserts = document.createElement("h3");
    desserts.textContent = "Desserts"
    pageContent.appendChild(desserts);

    const dessertsCopy = document.createElement("p");
    dessertsCopy.textContent = "Ice cream, Chocolate mousse, Grapes";
    pageContent.appendChild(dessertsCopy);

    content.appendChild(pageContent);
}

export default createMenu;