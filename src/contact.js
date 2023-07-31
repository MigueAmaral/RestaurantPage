const createContact = () => {

    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const headline = document.createElement("h1");
    headline.textContent = "CONTACT"
    pageContent.appendChild(headline);

    const name = document.createElement("h3");
    name.textContent = "Name"
    pageContent.appendChild(name);

    const nameInp = document.createElement("input");
    pageContent.appendChild(nameInp);

    const email = document.createElement("h3");
    email.textContent = "Email"
    pageContent.appendChild(email);

    const emailInp = document.createElement("input");
    pageContent.appendChild(emailInp);

    const text = document.createElement("h3");
    text.textContent = "Asks us anything:"
    pageContent.appendChild(text);

    const textBox = document.createElement("textarea");
    pageContent.appendChild(textBox);

    content.appendChild(pageContent);
}

export default createContact;