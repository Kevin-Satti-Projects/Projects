const functionOne = () => {
    document.getElementById("tab1").style.textDecoration = "underline";
    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    let text = document.createElement("div");
    text.id = "text";
    let textContent1 = document.createTextNode("Come along to the ");
    text.appendChild(textContent1);
    let italicText = "World's Best Restaurant";
    italicText = italicText.italics();
    text.innerHTML = text.innerHTML + italicText;
    let textContent2 = document.createTextNode("™\! A feast for the senses awaits\! Meat, cheese and fried foods of every variety.");
    text.appendChild(textContent2);
    textContainer.appendChild(text);
    document.getElementById("content").appendChild(textContainer);
    let center = document.createElement("div");
    center.id = "center";
    let logo = document.createElement("img");
    logo.id = 'logo';
    logo.src = '../Images/logo.png';
    center.appendChild(logo);
    document.getElementById("content").appendChild(center);
}

const functionTwo = () => {
    let textContainer = document.createElement("div");
    textContainer.id = "textContainerMenu";
    let figure1 = document.createElement("figure");
    let chicken = document.createElement("img");
    chicken.classList.add("food");
    chicken.src = '../Images/chicken.jpg';
    figure1.appendChild(chicken);
    let caption1 = document.createElement("figcaption");
    let captionText1 = document.createTextNode("Popcorn Chicken");
    caption1.appendChild(captionText1);
    figure1.appendChild(caption1);
    textContainer.appendChild(figure1);
    let figure2 = document.createElement("figure");
    let burger = document.createElement("img");
    burger.classList.add("food");
    burger.src = '../Images/burger.jpg';
    figure2.appendChild(burger);
    let caption2 = document.createElement("figcaption");
    let captionText2 = document.createTextNode("Bacon Cheeseburger");
    caption2.appendChild(captionText2);
    figure2.appendChild(caption2);
    textContainer.appendChild(figure2);
    let figure3 = document.createElement("figure");
    let fullEnglish = document.createElement("img");
    fullEnglish.classList.add("food");
    fullEnglish.src = '../Images/fullEnglish.jpg';
    figure3.appendChild(fullEnglish);
    let caption3 = document.createElement("figcaption");
    let captionText3 = document.createTextNode("Full English");
    caption3.appendChild(captionText3);
    figure3.appendChild(caption3);
    textContainer.appendChild(figure3);
    document.getElementById("content").appendChild(textContainer);
};

const functionThree = () => {
    let textContainer = document.createElement("div");
    textContainer.id = "textContainer";
    let div1 = document.createElement("div");
    let textNode1 = document.createTextNode("Address: 123 Restaurant Road");
    div1.appendChild(textNode1);
    textContainer.appendChild(div1);
    let div2 = document.createElement("div");
    let textNode2 = document.createTextNode("Email: WorldsBestRestaurant@food.com");
    div2.appendChild(textNode2);
    textContainer.appendChild(div2); 
    let div3 = document.createElement("div");
    let textNode3 = document.createTextNode("Phone: 123456789");
    div3.appendChild(textNode3);
    textContainer.appendChild(div3);
    document.getElementById("content").appendChild(textContainer);
};

export {
  functionOne,
  functionTwo,
  functionThree
}