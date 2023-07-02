"use strict";

let closeEl = document.getElementById("modal-close");
let modalEl = document.getElementById("modal");
let artistEl = document.querySelectorAll(".artist");
let messageEl = document.getElementById("modal-message");
let overlayEl = document.getElementById("overlay");

for (let i = 0; i < artistEl.length; i++) {
  artistEl[i].addEventListener("click", () => {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
    switch (i) {
      case 0:
        messageEl.innerText = `1. "There Is a Light That Never Goes Out"
            2. "This Charming Man"
            3. "How Soon Is Now?"
            4. "Bigmouth Strikes Again"
            5. "Panic"
            6. "The Boy with the Thorn in His Side"
            7. "Heaven Knows I'm Miserable Now"
            8. "Ask"
            9. "William, It Was Really Nothing"
            10. "Please, Please, Please Let Me Get What I Want"`;
        break;
      case 1:
        messageEl.innerText = ` 1. Dancing Queen
        2. Mamma Mia
        3. Waterloo
        4. Take a Chance on Me
        5. The Winner Takes It All
        6. Fernando
        7. SOS
        8. Knowing Me, Knowing You
        9. Gimme! Gimme! Gimme! (A Man After Midnight)
        10. Super Trouper
        `;
        break;
      case 2:
        messageEl.innerText = ` 1. "You're My Heart, You're My Soul"
        2. "Cheri, Cheri Lady"
        3. "Brother Louie"
        4. "Atlantis Is Calling (S.O.S. for Love)"
        5. "Geronimo's Cadillac"
        6. "You Can Win If You Want"
        7. "Jet Airliner"
        8. "In 100 Years"
        9. "With a Little Love"
        10. "Lady Lai"`;
        break;
      default:
        break;
    }
  });
}

const closeModal = () => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

closeEl.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") closeModal();
});
