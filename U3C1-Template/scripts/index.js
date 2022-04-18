//store the products array in localstorage as "products"
document.querySelector('form').addEventListener('submit',formSubmit)
let products_data=JSON.parse(localStorage.getItem('products'))||[]
console.log(products_data)
function formSubmit(event){
    event.preventDefault()

    let product_name=document.getElementById('name').value
    let product_price=document.getElementById('price').value
    let product_type=document.getElementById('type').value
    let product_img=document.getElementById('image').value

    console.log(product_name,product_price,product_type,product_img)

    let details={
        name:product_name,
        price:product_price,
        type:product_type,
        image:product_img,
    }
    products_data.push(details)
    localStorage.setItem("products",JSON.stringify(products_data))
    window.location.href='inventory.html'
  
}

