let getBuy_car = document.querySelectorAll(".buy_car");
// let fragment = document.createDocumentFragment()
let minicartI = document.querySelector(".minicart__header i");
let minicart = document.querySelector(".minicart");

let editProductCar = []

console.log(dataVariants)

const popUpCar = () => {

  minicart.style.display = "none";
};

minicartI.addEventListener("click", popUpCar);


const setEventButtonDelete = ()=> {
  let editProductCarProof = document.querySelectorAll(".minicart__list--delete");
  let nuewVar = Array.from(editProductCarProof)

  nuewVar.forEach((editproduct) => {
    editproduct.addEventListener("click", (e) => {
        editProduct(e.target.name);
    });
  });
}


const getCarProduct = async (items) => {

let minicartList = document.querySelector(".minicart__list");

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

   
      let divMinicartList = document.createElement("div")
      divMinicartList.setAttribute("class", "minicart__list")

    console.log(promiseGetCar)

    for (let i = 0; i < promiseGetCar.items.length; i++) {
      let div = document.createElement("div");
      let divI = document.createElement("div");
      let h3 = document.createElement("h3");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let iElement = document.createElement("i");
      let divSelect = document.createElement("div");
      let select = document.createElement("select")
      let label = document.createElement("label")
      let optionDefault = document.createElement("option")

      divSelect.setAttribute("class","minicart__list--select")
      select.setAttribute("id",`minicart__select--${promiseGetCar.items[i].id}`)
      label.setAttribute("for",`minicart__select--${promiseGetCar.items[i].id}`)
      optionDefault.innerHTML= `Choose here` 
      optionDefault.setAttribute("selected", "selected")
      optionDefault.setAttribute("disabled", "disabled")
      optionDefault.setAttribute("hidden", "hidden")
      select.appendChild(optionDefault)
   
      for (let j = 0; j < 5; j++) {
        let option = document.createElement("option")
        option.setAttribute("value", `${j}`) 
        option.innerHTML= `${j}` 
        select.appendChild(option)
      }
      img.setAttribute("src", `${promiseGetCar.items[i].image}`);
      div.setAttribute("class", `minicart__list--render`);
      divI.setAttribute("class",`minicart__list--delete`);
      divI.setAttribute("name",`${promiseGetCar.items[i].id}`);
      iElement.setAttribute("class",`fas fa-trash-alt delete__${promiseGetCar.items[i].id}`);

      h3.innerHTML = `${promiseGetCar.items[i].product_title}`;
      label.innerHTML = "change the amount";
      p.innerHTML = `${promiseGetCar.items[i].final_price}`;

      divSelect.appendChild(label)
      divSelect.appendChild(select)
      div.appendChild(h3);
      div.appendChild(img);
      divI.appendChild(iElement)
      div.appendChild(divI);
      div.appendChild(p);
      divMinicartList.appendChild(div);
      divMinicartList.appendChild(divSelect);
    }

    minicart.replaceChild(divMinicartList, minicartList); 
    
    minicart.style.display = "block"

    editProductCar = document.querySelectorAll(".minicart__list--delete");
    console.log(editProductCar);
    
    console.log(promiseGetCar);
    setEventButtonDelete()
  }
};


const editProduct = async (nameId, url) => {
  console.log(nameId)
  const id_NUmber = parseInt(nameId);
  console.log(id_NUmber)
  let formData = {
    id: id_NUmber,
    quantity: 0
  };

  const promiseEditCar = await fetch("/cart/change.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    console.log(promiseEditCar)
    
};

editProductCar.forEach((editproduct) => {
    editproduct.addEventListener("click", (e) => {
        editProduct(e.target.name);
    });
  });


  
  

