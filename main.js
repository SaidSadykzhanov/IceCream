// burger menu
function burgerMenu() {
    let element = document.getElementById("burger");
    element.classList.toggle("active")
}

function closeBurgerMenu() {
    let element = document.getElementById("burger");
    element.classList.remove("active")
}

// product card
function productCard() {
    let cards = document.querySelector(".product__cards");
    let task = [
        {
            id: 1,
            name: "ICE CREAM",
            description: "Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer",
            image: "1.svg",
            background: "#AEC6A5",
            picture: "linear-gradient(0deg, rgba(156, 190, 143, 0.7), rgba(156, 190, 143, 0.7)), #D9D9D9"
        },
        {
            id: 2,
            name: "ICE COFFEE",
            description: "Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer",
            image: "2.svg",
            background: "#EFD478",
            picture: "linear-gradient(0deg, rgba(248, 210, 78, 0.7), rgba(248, 210, 78, 0.7)), #D9D9D9"
        },
        {
            id: 3,
            name: "MILKSHAKES",
            description: "Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer",
            image: "3.svg",
            background: "#D6936D",
            picture: "linear-gradient(0deg, rgba(213, 117, 63, 0.7), rgba(213, 117, 63, 0.7)), #D9D9D9"
        }
    ]

    task.forEach((item) => {
        // card
        let card = document.createElement("div");
        card.classList.add("product__card");
        card.style.background = item.background
        cards.append(card);

        // picture and image
        let picture = document.createElement("div");
        let image = document.createElement("img");
        picture.classList.add("product__picture");
        picture.style.background = item.picture
        image.setAttribute("src", `./images/product/${item.image}`);
        picture.append(image);
        card.append(picture);

        // name
        let name = document.createElement("p");
        name.classList.add("product__name");
        name.textContent = item.name
        card.append(name)

        // description
        let description = document.createElement("p");
        description.classList.add("product__content");
        description.textContent = item.description;
        card.append(description);

        // svg
        let svg = document.createElement("div");
        svg.classList.add("product__svg");
        svg.innerHTML = `
            <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.9745 8.5956C41.365 8.20507 41.365 7.57191 40.9745 7.18138L34.6106 0.817421C34.22 0.426897 33.5869 0.426897 33.1963 0.817421C32.8058 1.20795 32.8058 1.84111 33.1963 2.23163L38.8532 7.88849L33.1963 13.5453C32.8058 13.9359 32.8058 14.569 33.1963 14.9596C33.5869 15.3501 34.22 15.3501 34.6106 14.9596L40.9745 8.5956ZM0.0327148 8.88849H40.2674V6.88849H0.0327148V8.88849Z" fill="#131313"/>
            </svg>
        `
        card.append(svg)
    })
}

productCard()

// comments
let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

// read modal
function readModal() {
    let element = document.getElementById("read-modal");
    let blur = document.getElementById("blur");
    blur.classList.toggle("active")
    element.classList.toggle("active");
}

function locationModal() {
    let element = document.getElementById("location-modal");
    let blur = document.getElementById("blur");
    blur.classList.toggle("active")
    element.classList.toggle("active");
}

function franchiseModal() {
    let element = document.getElementById("franchise-modal");
    let blur = document.getElementById("blur");
    blur.classList.toggle("active")
    element.classList.toggle("active");
}