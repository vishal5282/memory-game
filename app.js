document.addEventListener("DOMContentLoaded", () => {
  const cardCategory = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  cardCategory.sort(() => 0.5 - Math.random());

  const gridDisplay = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  let cardChoose = [];
  let cardChooseIds = [];
  let cardWon = [];

  function createBord() {
    for (let i = 0; i < cardCategory.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", `/images/blank.png`);
      card.setAttribute("id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }

  function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionalOneId = cardChooseIds[0];
    const optionalSecondId = cardChooseIds[1];

    if (optionalOneId === optionalSecondId) {
      cards[optionalOneId].setAttribute("src", "images/blank.png");
      cards[optionalSecondId].setAttribute("src", "images/blank.png");
      alert("You are clicked the same image!");
    } else if (cardChoose[0] === cardChoose[1]) {
      alert("You found a match!!");
      cards[optionalOneId].setAttribute("src", "images/white.png");
      cards[optionalSecondId].setAttribute("src", "images/white.png");
      cards[optionalOneId].removeEventListener("click", flipCard);
      cards[optionalSecondId].removeEventListener("click", flipCard);
      cardWon.push(cardChoose);
    } else {
      cards[optionalOneId].setAttribute("src", "images/blank.png");
      cards[optionalSecondId].setAttribute("src", "images/blank.png");
      alert("Sorry try again!");
    }
    resultDisplay.textContent = cardWon.length;
    cardChoose = [];
    cardChooseIds = [];

    if (cardWon.length == cardCategory.length / 2) {
      resultDisplay.textContent = "Congratilation you found them all";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("id");
    cardChoose.push(cardCategory[cardId].name);
    cardChooseIds.push(cardId);
    this.setAttribute("src", cardCategory[cardId].img);

    if (cardChoose.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBord();
});
