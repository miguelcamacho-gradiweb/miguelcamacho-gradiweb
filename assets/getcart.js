let getBuy_car = document.querySelectorAll(".buy_car");
// let fragment = document.createDocumentFragment()
let minicartI = document.querySelector(".minicart__header i");
let minicart = document.querySelector(".minicart");
let minicartShade = document.querySelector(".minicartShade");

let editProductCar = []

const popUpCar = () => {

  minicartShade.style.display = "none";
};

minicartI.addEventListener("click", popUpCar);

const editProduct = async (nameId) => {
  console.log(nameId)
  const id_NUmber = parseInt(nameId);
  let formDataedit =  { quantity: 10, id: id_NUmber }

  const promiseEditCar = await fetch("/cart/update.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataedit)
  })
    .then((response) => {
      console.log(response);
      
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    console.log(promiseEditCar)
    
};

const setEventButtonDelete = ()=> {
  let editProductCarProof = document.querySelectorAll(".minicart__list--delete");
  let nuewVar = Array.from(editProductCarProof)

  nuewVar.forEach((editproduct) => {
    editproduct.addEventListener("click", (e) => {
        editProduct(e.target.id);
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
      iElement.setAttribute("id",`${promiseGetCar.items[i].id}`);
      iElement.setAttribute("class",`fas fa-trash-alt delete__${promiseGetCar.items[i].id}`);

      h3.innerHTML = `${promiseGetCar.items[i].product_title}`;
      label.innerHTML = "change the amount";
      p.innerHTML = `${promiseGetCar.items[i].final_price} $`;

      divSelect.appendChild(label)
      divSelect.appendChild(select)
      div.appendChild(h3);
      div.appendChild(img);
      divI.appendChild(iElement)
      div.appendChild(divI);
      div.appendChild(p);
      div.appendChild(divSelect);
      divMinicartList.appendChild(div);
    }

    minicart.replaceChild(divMinicartList, minicartList); 
    
    minicartShade.style.display = "block"

    editProductCar = document.querySelectorAll(".minicart__list--delete");
    console.log(editProductCar);
    
    console.log(promiseGetCar);
    setEventButtonDelete()
  }
};




// editProductCar.forEach((editproduct) => {
//     editproduct.addEventListener("click", (e) => {
//         editProduct(e.target.name);
//     });
//   });


  
  

