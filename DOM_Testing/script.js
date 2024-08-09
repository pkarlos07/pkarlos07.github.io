const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const paragraph1 = document.createElement("p");
paragraph1.setAttribute("style", "color: red;")
paragraph1.textContent("Hey I'm red!");

const head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
head3.setAttribute("style", "color: blue;");

const newdiv = document.createElement("div");
newdiv.setAttribute("style", "border: solid black;");
newdiv.style["background-color: pink"];

const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";

newdiv.appendChild(head1, paragraph2);
container.appendChild(paragraph1, head3, newdiv);


