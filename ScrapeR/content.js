console.log("content.js is running")

// empty array
const results = []

// find all article components
const articles = document.querySelectorAll("article");
// loop through articles
for (let article of articles){
    // select the aTag of every article
    aTag = article.querySelector("a");

    // assign innerText, href to title, link
    const title = aTag.innerText;
    const link = aTag.href;
    // add innerText, href to results array
    results.push({title, link});
}

// create a button of space 
const overlay = document.createElement("div");
// styling
overlay.style.position = "fixed";
overlay.style.right = "20px";
overlay.style.top = "50px";
overlay.style.padding = "40px 20px"
overlay.style.backgroundColor = "white";
overlay.style.color = "black"
overlay.style.fontSize = "12px";
overlay.style.fontFamily = "Serif";
overlay.style.zIndex = 9999;
overlay.style.border = "6px";
overlay.style.textAlign = "justify";

// for loop through results array
for (let result of results){
    // add component "a" - line of text
    const child = document.createElement("a");
    child.innerText = result.title;
    child.href = result.link;

    // add child to overlay field
    overlay.appendChild(child);
    // add a line break
    overlay.appendChild(document.createElement("br"));
}

// add overlay to page
document.body.appendChild(overlay);
