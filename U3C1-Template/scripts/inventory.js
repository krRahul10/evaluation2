let data=JSON.parse(localStorage.getItem('products'))
console.log(data)
appendData(data)

let btn =document.getElementById('add_product')
function appendData(data){
    data.map(function (el){
console.log("el",el)
let btn =document.getElementById('add_product')
let div=document.createElement('div')
div.id='product_data'

let name=document.createElement('p')
name.innerHTML=el.name

let price=document.createElement('p')
price.innerHTML=el.price

let type=document.createElement('p')
type.innerHTML=el.type

let image=document.createElement('img')
image.src=el.image

div.append(name,price,type,image,btn)
document.getElementById('products_data').append(div)

    })
}