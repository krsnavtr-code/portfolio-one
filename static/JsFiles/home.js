const nav = document.querySelector(".navbar");
fetch('/static/HtmlFiles/base.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
});
// const footer = document.querySelector(".footer-");
// fetch('/static/HtmlFiles/footer.html')
// .then(res=>res.text())
// .then(data=>{
//     footer.innerHTML=data
// });


// Repeat a Corse Section
let corseSection = document.querySelector('#corse-section');
let sectionItem = ` <div id="0" class="item">
<img src="" alt="1">
<h3 class="corseName">Corse Name</h3>
<p class="item-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, delectus.</p>
<div class="item-content-button">Read more</div>
</div>`

let arry = [
    {corseName: "Web Development", coverPath: "../static/stuff/webLogo.jpg", itemContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?", buttonUrl: "item-content-button" },
    {corseName: "Web Hosting", coverPath: "../static/stuff/hosting.jpg", itemContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?", buttonUrl: "item-content-button" },
    {corseName: "Mobile App Development", coverPath: "../static/stuff/mobile.jpg", itemContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?", buttonUrl: "item-content-button" },
    {corseName: "Web Designing", coverPath: "../static/stuff/webDesign.png", itemContent: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?", buttonUrl: "item-content-button" }
]

function repeat(i, corseName, coverPath, itemContent, buttonUrl){
    return `<div id="${i}" class="item">
                <img src="${coverPath}" alt="1">
                <h3 class="corseName">${corseName}</h3>
                <p class="item-content">${itemContent}</p>
                <div class="${buttonUrl}">Read more</div>
            </div>`
}

arry.forEach((item, i)  =>{
    corseSection.insertAdjacentHTML("beforeend", repeat(i , item.corseName, item.coverPath, item.itemContent, item.buttonUrl));
});

// 