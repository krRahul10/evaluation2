
        let items=JSON.parse(localStorage.getItem('purchases'))
        console.log('items',items)
        appendData(items)


function appendData(items){
    items.map((el)=>{
       // console.log('el',el)
        let div=document.createElement('div')
        div.id='insideDiv'
        
        let image=document.createElement('img')
        image.src=el.image
        image.id='img'

        let name=document.createElement('p')
        name.innerHTML=el.name

        let price=document.createElement('p')
        price.innerHTML=el.price

        div.append(image,name,price)

        document.getElementById('purchases').append(div)


    })
}
