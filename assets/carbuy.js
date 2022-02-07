let buy_car = document.querySelectorAll(".buy_car");
let minicart_name = document.getElementById("minicart_name");

const buyProduct = async (variantData, url) => {

  const id_NUmber = parseInt(variantData.id);
  console.log(variantData)
  // minicart_name.innerHTML =
  console.log(id_NUmber)
  let formData = {
    items: [
      {
        id: id_NUmber,
        quantity: 1,
      },
    ],
  };

  const promiseBuyCar = await fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => { 
      // window.location.assign("https://miguelcamacho-gradi-store.myshopify.com/cart");
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log(promiseBuyCar);
};

buy_car.forEach((product) => {
  product.addEventListener("click", (e) => {
    buyProduct(e.target.id);
  });
});
