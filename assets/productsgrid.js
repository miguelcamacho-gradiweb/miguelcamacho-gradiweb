let product_variants = document.querySelectorAll(".product_variants img")
let img_product = document.querySelectorAll(".product__render img");
let p_product = document.querySelectorAll(".product__buy p");
selectCollectionId = document.getElementById("selectCollectionId")
const sizeImg_product = img_product.length
let data = null
let variante = null
let sizeData = null

const collectionData =(collection)=>{
    data = collection
    sizeData = data.length
}

const collectionVariants =(dataVariante)=>{
    variante = dataVariante
    console.log(variante);
    
}


const changeCollection = (e)=>{
    for (let i = 0; i < sizeData; i++) {
        if(data[i].id !=  e.target.value){
            document.querySelector(`.${data[i].handle}`).style.display = "none"
        } else {
            document.querySelector(`.${data[i].handle}`).style.display = "block"
        }
    }
}

selectCollectionId.addEventListener("change", changeCollection)


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



