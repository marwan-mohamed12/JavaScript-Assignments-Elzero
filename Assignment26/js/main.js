// Task 1
/*
const getData = (apiLink) => {
    return new Promise((res, rej) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = () => {
            if (myRequest.readyState === 4 && myRequest.status === 200) {
                res(JSON.parse(myRequest.responseText));
            } else {
                rej(Error("Something Went Wrong!"));
            }
        };
        myRequest.open("GET", apiLink);
        myRequest.send();
    });
};

getData("./test.json").then((res) => {
    console.log(res);
    for (let i = 0; i < 5; i++) {
        let div = document.createElement("div"),
            title = document.createElement("h3"),
            description = document.createElement("p");

        let titleText = document.createTextNode(res[i].title),
            descriptionText = document.createTextNode(res[i].description);

        title.appendChild(titleText);
        description.appendChild(descriptionText);

        div.appendChild(title);
        div.appendChild(description);

        document.body.append(div);
    }
});
*/

// Task 2

async function getData(apiLink) {
    try {
        let myData = await fetch(apiLink),
            res = await myData.json();
        for (let i = 0; i < 5; i++) {
            let div = document.createElement("div"),
                title = document.createElement("h3"),
                description = document.createElement("p");

            let titleText = document.createTextNode(res[i].title),
                descriptionText = document.createTextNode(res[i].description);

            title.appendChild(titleText);
            description.appendChild(descriptionText);

            div.appendChild(title);
            div.appendChild(description);

            document.body.append(div);
        }
    } catch {
        console.log(Error("Something Went Wrong!"));
    }
}

getData("./test.json");
