let content = document.querySelector("#content");
const data = [
    {
        name: "बकासुर",
        img: "bakasur.jpeg",
        address: "bakasur"
    },
    {
        name: "निशान",
        img: "nishan.png",
        address: "nishan"
    },
    {
        name: "सोन्या",
        img: "sonya.jpeg",
        address: "sonya"
    },
    {
        name: "मथूर",
        img: "mathur.jpeg",
        address: "mathur"
    },
    {
        name: "महिब्या",
        img: "mahibya.png",
        address: "mahibya"
    },
    {
        name: "सुंदर",
        img: "sundar.jpeg",
        address: "sundar"
    },
    {
        name: "मोठा लक्षा",
        img: "laksha.jpeg",
        address: "laksha"
    },
    {
        name: "बलमा",
        img: "balama.jpg",
        address: "balama"
    },
    {
        name: "भारत",
        img: "bharat.png",
        address: "bharat"
    },
    {
        name: "मिल्खा",
        img: "milkha.png",
        address: "milkha"
    },
    {
        name: "चिक्या",
        img: "chikya.png",
        address: "chikya"
    }
    
    
]

// कर्जतच्या मैदानावर रौंदळ माजवणारा चिक्या बैल | Chikya Bail | Bailgada Sharyat | VIshaych Bhari




data.map(e => {

    content.innerHTML +=
    `
    <div class="content">
    <div class="imgdiv">
    <img src="images/${e.img}" alt="">
    </div>
    <div class="info">
    <h2>${e.name}</h2>
    <a href="${e.address}.html"><i class="uil uil-caret-right"></i></a>
    </div>
    </div>
    `
})
