//bookimg
const bookingForm = document.querySelector(".con-btn");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let checkin = document.getElementById("checkin").value;
        let checkout = document.getElementById("checkout").value;
        let guests = document.getElementById("guests").value;
        let room = document.getElementById("rooms").value;

        let name = document.getElementById("name").value;
        let mail = document.getElementById("mail").value;
        let request = document.getElementById("request")?.value;

        if (!checkin || !checkout) {
            alert("Please select check-in and check-out dates.");
            return;
        }
        if (!name || !mail) {
            alert("Please enter your name and email.");
            return;
        }

        let bookingWhatsAppMessage = `🏨 New Villa Booking Request
👤 Name: ${name}

📧 Email: ${mail}

📅 Check-in Date: ${checkin}
📅 Check-out Date: ${checkout}
👥 Guests: ${guests}
🏡 Room: ${room}
📝 Special Request:
${request} `;


        let bookingWhatsAppURL =
            `https://wa.me/919316009175?text=${encodeURIComponent(bookingWhatsAppMessage)}`;

        window.open(bookingWhatsAppURL, "_blank");
    });
}


const viewMore = document.getElementById("viewMore");
viewMore.addEventListener("click", function () {

    const moreImages = document.querySelectorAll(".more-img");


    if (viewMore.textContent === "View More") {
        moreImages.forEach(function (img) {
            img.style.display = "block";
        });

        viewMore.textContent = "View Less";
    }
    else {
        moreImages.forEach(function (img) {
            img.style.display = "none";
        });

        viewMore.textContent = "View More";
    }
});


const cards = document.querySelectorAll(".gallery-card");
const imageP = document.getElementById("imageP");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.querySelector("#imageP span");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        const image = card.querySelector(".gallery-image");

        popupImage.src = image.src;
        popupImage.alt = image.alt;
        imageP.style.display = "flex";

    });
});
closeBtn.addEventListener("click", function () {
    imageP.style.display = "none";
});

imageP.addEventListener("click", function (event) {
    if (event.target === imageP) {
        imageP.style.display = "none";
    }
});


