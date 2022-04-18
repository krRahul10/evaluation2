let cartData=JSON.parse(localStorage.getItem('cart'))
console.log('cartItem',cartData)

appendData(cartData)

function appendData(meals){
    meals.map(function (el){
    console.log("el",el)  
      
      let div=document.createElement('div')
      div.id='article_div1'
      
      let image=document.createElement('img')
      image.src=el.strMealThumb
      image.id='foodImage'
     
      let name=document.createElement('p')
      name.innerHTML=el.strMeal
    
      let price=document.createElement('p')
      price.innerHTML=el.price

      let btn=document.createElement('button')
     btn.id='remove'
     btn.innerHTML='Remove Item'
     btn.addEventListener('click',function (){
         removeToCart(el)
     })

      div.append(image,name,price,btn)

      document.getElementById('cart').append(div)

     })
}

var total=cartData.reduce(function(ac,cv){
    return ac +Number(cv.price)
},0)
document.getElementById('total-price').textContent=`Total Amount is = ₹ ${total}`