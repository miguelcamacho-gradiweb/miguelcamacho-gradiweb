let product_variants = document.querySelectorAll(".product_variants img")
let img_product = document.querySelectorAll(".product__render img");
let p_product = document.querySelectorAll(".product__buy p");

const sizeImg_product = img_product.length

const changeSrcProduct = (e) => {
    for (let i = 0; i < sizeImg_product; i++) {
        if(e.target.name === img_product[i].id ){
            img_product[i].setAttribute("src", `${e.srcElement.src}`)
            p_product[i].setAttribute("id", `${e.target.id}`)
        }
    }
}

product_variants.forEach((product_variant) => {
    product_variant.addEventListener('mouseover', (e) => {
        changeSrcProduct(e)
    })
})

let  rangeLimit = document.getElementById("rangeLimit")
let  seeRange = document.getElementById("seeRange")

const valueRange = (e) => {
    seeRange.textContent = `${e.target.value} Products`

}

rangeLimit.addEventListener('keyup', (e) => {valueRange(e)})
rangeLimit.addEventListener('mouseup', (e) => {valueRange(e)})






