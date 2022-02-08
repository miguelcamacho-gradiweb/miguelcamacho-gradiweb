let getBuy_car = document.querySelectorAll(".buy_car");
// let fragment = document.createDocumentFragment()
let minicartList = document.querySelector(".minicart__list");
let minicartI = document.querySelector(".minicart__header i");
let minicart = document.querySelector(".minicart");
let flag = false;

const popUpCar = () => {
  minicart.style.display = "none";
};

minicartI.addEventListener("click", popUpCar);

const getCarProduct = async (items) => {
  if (items.length > 0) {
    const promiseGetCar = await fetch("/cart.js", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    for (let i = 0; i < promiseGetCar.items.length; i++) {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let iElement = document.createElement("i");

      img.setAttribute("src", `${promiseGetCar.items[i].image}`);
      div.setAttribute("class", `minicart__list--${promiseGetCar.items[i].id}`);
      iElement.setAttribute(
        "class",
        `fas fa-trash-alt delete__${promiseGetCar.items[i].id}`
      );
      h3.innerHTML = `${promiseGetCar.items[i].product_title}`;
      p.innerHTML = `${promiseGetCar.items[i].final_price}`;
      div.appendChild(h3);
      div.appendChild(img);
      div.appendChild(iElement);
      div.appendChild(p);
      minicartList.appendChild(div);
    }

    
    minicart.style.display = "block"


    console.log(promiseGetCar);
  }
};

//   getBuy_car.forEach((productCar) => {
//     productCar.addEventListener("click", (e) => {
//         getCarProduct(e.target.id);
//     });
//   });
