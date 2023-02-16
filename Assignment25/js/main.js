// Task 2 and Task 3
/*
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.response);
        for (let i = 0; i < mainData.length; i++) {
            mainData[i].Category = "All";
        }
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
        console.log("Data Loaded");
    }
};
*/
// Task 4

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "./articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.response),
            container = document.createElement("div");
        document.body.appendChild(container);
        container.setAttribute("id", "data");
        for (let i = 0; i < mainData.length; i++) {
            let articleDiv = document.createElement("div"),
                title = document.createElement("h2"),
                numParagraph = document.createElement("p"),
                author = document.createElement("p"),
                category = document.createElement("p");

            articleDiv.className = "section";

            let titleText = document.createTextNode(mainData[i].Header),
                numText = document.createTextNode(
                    `Article Number ${mainData[i].id + 1} Body`
                ),
                authorText = document.createTextNode(
                    `Author: ${mainData[i].Author}`
                ),
                categoryText = document.createTextNode(
                    `Category: ${mainData[i].Category}`
                );

            title.appendChild(titleText);
            numParagraph.appendChild(numText);
            author.appendChild(authorText);
            category.appendChild(categoryText);

            articleDiv.appendChild(title);
            articleDiv.appendChild(numParagraph);
            articleDiv.appendChild(author);
            articleDiv.appendChild(category);

            container.appendChild(articleDiv);
        }
    }
};
