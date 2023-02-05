// Styling Body
document.body.style.cssText = "font-family: arial; margin: 0";

// Creating Header

let logo = document.createElement("h3"),
    logoText = document.createTextNode("Elzero"),
    linkList = document.createElement("ul"),
    homeListItem = document.createElement("li"),
    homelinkText = document.createTextNode("Home"),
    aboutListItem = document.createElement("li"),
    aboutlinkText = document.createTextNode("About"),
    serviceListItem = document.createElement("li"),
    servicelinkText = document.createTextNode("Service"),
    contactListItem = document.createElement("li"),
    contactlinkText = document.createTextNode("Contact");

let LinksListText = ["Home", "About", "Service", "Contact"];

// Creating logo
logo.appendChild(logoText);

// Appending li to ul
for (let i = 0; i < LinksListText.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = LinksListText[i];
    li.style.cssText = `
        font-size: 12px;
        padding-left: 10px;
        color: #8792A0;
    `;
    linkList.appendChild(li);
}

// create header div
let header = document.createElement("div");
header.className = "header";

// Appending logo and ul to header div
header.appendChild(logo);
header.appendChild(linkList);

// Appending header to body
document.body.appendChild(header);

// Styling Header
header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
`;

// Styling Logo
logo.style.cssText = "color: #26AA74; margin: 5px 0;";

// Styling Ul and Li
linkList.style.cssText = `
    list-style: none;
    display: flex;
`;

// Creating Content and Products

// Create Content Div to Hold Products
let contentDiv = document.createElement("div");
contentDiv.className = "content";

for (let i = 0; i < 15; i++) {
    // Create Products
    let prodcutDiv = document.createElement("div"),
        spanNum = document.createElement("span"),
        spanNumtext = document.createTextNode(`${i + 1}`),
        divText = document.createTextNode("product");
    prodcutDiv.className = "product";
    spanNum.className = "product-number";

    // Append num of product to span
    spanNum.appendChild(spanNumtext);
    // Append span and text to product
    prodcutDiv.appendChild(spanNum);
    prodcutDiv.appendChild(divText);

    // Append product to content div
    contentDiv.appendChild(prodcutDiv);

    // Style Product Div
    prodcutDiv.style.cssText = `
        text-align: center;
        background-color: white;
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 12px;
        color: #8792A0;
`;

    // Style of the Span
    spanNum.style.cssText = `
        display: block;
        font-size: 22px;
        color: black;
`;
}

// Append content to the page body after header
header.after(contentDiv);

// Style Contetn Div
contentDiv.style.cssText = `
    background-color: #ECECEC;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    gap: 10px;
    padding: 20px 10px;
`;

// Create Footer
let footer = document.createElement("div"),
    footerText = document.createTextNode("Copyright 2023");
footer.appendChild(footerText);
contentDiv.after(footer);

// Style footer
footer.style.cssText = `
    background-color: #23A96E;
    color: white;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
