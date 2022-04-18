let url=`https://masai-food-api.herokuapp.com/api/meals/india`

async function getData(){
    try{

        let res=await fetch(url)

        let data=await res.json()

        let meals=data[0].meals

       // console.log("meals",meals)
        appendData(meals)
        //console.log(meals)
    }catch(err){
console.log('error',err)
    }
}
getData()

let cartArr=JSON.parse(localStorage.getItem('cart'))|| [];

function appendData(meals){
    meals.map(function (el){
      //console.log("el",el)  
      
      let div=document.createElement('div')
      div.id='article_div'
      
      let image=document.createElement('img')
      image.src=el.strMealThumb
      image.id='foodImage'
     
      let name=document.createElement('p')
      name.innerHTML=el.strMeal
    
      let price=document.createElement('p')
      price.innerHTML=el.price

     let btn=document.createElement('button')
     btn.id='addtocart'
     btn.innerHTML='Add TO Cart'
     btn.addEventListener('click',function (){
         addToCart(el)
     })

      div.append(image,name,price,btn)

      document.getElementById('menu').append(div)

    })
}

function addToCart(el){

    cartArr.push(el)
    localStorage.setItem('cart',JSON.stringify(cartArr)) 
    count=0
    count++
    document.getElementById('count').innerHTML=`${count}`
}