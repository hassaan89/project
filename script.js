var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
var getusername
window.onload=getload
function getload(){
  getusername=   prompt("Entre Your Name")
  alert("Welcome To BidSpirit Page")
 console.log(getusername)
document.querySelector("#username").innerHTML=getusername

}
ticker
ticker.js
function updateTicker() {
    const tickerElement = document.getElementById('ticker');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Use geolocation to get the user's location
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Create a string with the location data
        const locationString = `Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`;

        // Update the ticker content with date, time, and location
        tickerElement.textContent = `${formattedDate} ${formattedTime} | ${locationString}`;
    });
}

// Call the updateTicker function to start updating the ticker
updateTicker();

// Update the ticker content every minute
setInterval(updateTicker, 60000);



//loader
var loader=document.getElementById("pre-loader")
window.addEventListener("load",function(){
    loader.style.display="none"
})


//feedback submit button
function sum(){
    document.querySelector(".bfor");
    alert("Your feedback has sumbit!")
   
}
//contact us button
function contact(){
    document.getElementById("contact-button")
    alert("Your contact form has been submitted. Inshallah, we will contact you soon!")
}

let card = [
    {
        "img": "https://www.demilked.com/magazine/wp-content/uploads/2016/03/unique-style-finger-paintings-iris-scott-8.jpg",
        name: "Finger Dog Painting",
        bid: "$4000",
        bid2: "$8000"
    },
    {
        "img": "https://www.demilked.com/magazine/wp-content/uploads/2016/03/unique-style-finger-paintings-iris-scott-15.jpg",
        name: "Finger Fox Painting",
        bid: "$6,614",
        bid2: "$9000"
    },
    {
        "img": "https://i.pinimg.com/originals/f0/74/6f/f0746fe4d62f91093e02fa237ce1b512.jpg",
        name: "Best Acrylic Painting",
        bid: "$4,500",
        bid2: "$7000"

    },

]
let div = document.querySelector(".f")
for (let index = 0; index < card.length; index++) {

    div.innerHTML += `<div class="c" onclick="handleclick(${index},'card')">
<img src="${card[index].img}" alt="">
<h5>${card[index].name}</h5>

</div>`
}
let product = [
    {
        "img": "https://2.bp.blogspot.com/-jLQ_GqxTZyM/T8DY1nIVh9I/AAAAAAAAAII/2NImQFikvDQ/s1600/antique_3_Centuries064.jpg",
        name: "Chinese Antique",
        bid: "$4000",
        bid2: "$8000"
    },
    {
        "img": "https://media-manager.starsinsider.com/gallery/1920/na_5b1ffbcb51827.jpg",
        name: "Antique Road Show Horse",
        bid: "$4000",
        bid2: "$8000"
    },
    {
        "img": "https://i.pinimg.com/originals/00/9e/86/009e8617443dbf4ee9c4bcd20a223175.jpg",
        name: "Pair of White Severs",
        bid: "$4000",
        bid2: "$8000"
    }
]
let div2 = document.querySelector(".container")
for (let index = 0; index < product.length; index++) {
    div2.innerHTML += `<div class="c" onclick="handleclick(${index},'product'
    )">
   <img src="${product[index].img}" alt="" >
   <h5>${product[index].name}</h5>
   </div>
`
}

let preveiwContainer = document.querySelector(".products-preview")
//bid-complete pop up
let preveiwContainer2 = document.querySelector("complete-preview")



let div5=[
    {
        "img":"https://i.pinimg.com/originals/96/25/eb/9625eb3bee174020c337c3ad1ed2ba7a.jpg",
        "name":"Old Silver Coin",
        bid:"$500",
        bid2:"$1000"
    },
    {
        "img":"https://i.pinimg.com/originals/b4/df/dd/b4dfdde4b5a5ada51874f68287d08ce5.jpg",
        "name":"1679 Charles Coin",
        bid:"$1000",
        bid2:"$1500"
    },
    {
        "img":"https://i.pinimg.com/originals/79/e2/9f/79e29f41c0bde6f425201b924f4b41ac.jpg",
        "name":"Old Vintage Coins",
        bid:"$1000",
        bid2:"$2000"
    }
]



let preveiwContainer3 = document.querySelector("sold-preview")
//bid-complete pop up
let preveiwContainer4 = document.querySelector("sold-out")

function handleclick(id,getname){
    console.log(getname)

    if(getname=="card") var getN=   card.slice(id,id+1)
//   else  if(getname=="div5") var getN=   div5.slice(id,id+1)
  else  if(getname=="product") var getN=  product.slice(id,id+1)
//   else  if(getname=="div7") var getN=   div7.slice(id,id+1)
    preveiwContainer.style.display = 'flex';
    preveiwContainer.innerHTML = `
   <div class="preview active" data-target="p-1">
                  <i class="fas fa-times" onclick='handleClose()'></i>
                  <img src=${getN[0].img} alt="">
                  <h3>${getN[0].name}</h3>
                  
                  <p>${getN[0].bid}</p>
                  <div class="price">${getN[0].bid2}</div>
                  <div class="buttons">
                      <a href="#" class="buy">Buy Now</a>
                      <a href="#" class="cart">Add To Cart</a>
                  </div>
              </div>
   `
}
function handleClose(){
    let previewBox = document.querySelector(".preview")
    
      preveiwContainer.style.display = 'none';
      previewBox.classList.remove("active") ;
}
//bid completed pop-up
function handleclick1(id,getname){
    console.log(getname)
    if(getname=="div5") var getN=   div5.slice(id,id+1)
    else  if(getname=="div7") var getN=   div7.slice(id,id+1)
 preveiwContainer.style.display = 'flex';
    preveiwContainer.innerHTML = `
   <div class="preview active" data-target="p-1">
                  <i class="fas fa-times" onclick='handleClose()'></i>
                  <img src=${getN[0].img} alt="">
                  <h3>${getN[0].name}</h3>
                  
                  <p>${getN[0].bid}</p>
                  <div class="price">${getN[0].bid2}</div>
                <p>Bid Completed!</p>
              </div>
   `
}
function handleClose(){
    let previewBox = document.querySelector(".preview")
    
      preveiwContainer.style.display = 'none';
      previewBox.classList.remove("active") ;
}

//feedback-cards
let feedback =[
{
    'img':'human.png',
    'name':'Joe Root',
    'p':'I came I saw I won. Love what I have won, and will try to win something else.'
    
},
{
    'img':'hum.png',
    'name':'Jason Roy',
    'p':'I came I saw I won. Love what I have won, and will try to win something else.'
},
{
    'img':'man.png',
    'name':'John Doe',
    'p':'I came I saw I won. Love what I have won, and will try to win something else.'
},
{
    'img':'fir.webp',
    'name':'John Doe',
    'p':'I came I saw I won. Love what I have won, and will try to win something else.'
},


]
let div3=document.querySelector(".feedback")
for (let index = 0; index < feedback.length; index++) {
div3.innerHTML+=`<div class="feedback-card">
<div class="feedback-para">
    <p>${feedback[index].p}</p>
    </div>
<div class="feedback-btm">
<img src="${feedback[index].img}" alt="">
<div class="name">
<h4>${feedback[index].name}</h4>
<div class="feedback-stars">
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>
</div>
</div>
</div>
</div>`
    
}
let div7=[
    {
        "img":"https://founterior.com/wp-content/uploads/2014/07/Unique-black-chair-for-modern-interiors.jpg",
        "name":"Designing Chair",
        bid:"$200",
        bid2:"$500"
        
    },
    {
        "img":"https://housely.com/wp-content/uploads/2016/04/Unique-Sofas-for-Contemporary-Living-Room-Furniture-Design-750x563.jpg",
        "name":"Electric Furniture",
        bid:"$500",
        bid2:"$1000"
    },
    {
        "img":"https://en.bcdn.biz/Images/2019/6/13/cbfed54d-1a74-4d65-8b3c-ce7ac1178851.jpg",
        "name":"Unique Sitting Picture",
        bid:"$1000",
        bid2:"$1500"
    },
    
]
let div6=document.querySelector(".complete-card")
for (let index = 0; index <div7.length; index++){
div6.innerHTML+= `<div class="complete-border" onclick="handleclick1(${index},'div7')">
<img src="${div7[index].img}" alt="">
<h5>${div7[index].name}</h5>
<h4>Bid Completed!</h4>
</div> `  
}

let div4=document.querySelector(".bid-complete")
for (let index = 0; index < div5.length; index++) {
 div4.innerHTML+=`<div class="complete-border" onclick="handleclick1(${index},'div5')" >
<img src=${div5[index].img} alt="">
<h5>${div5[index].name}</h5>
<h4>Bid Completed!</h4>
</div> `
    
}
