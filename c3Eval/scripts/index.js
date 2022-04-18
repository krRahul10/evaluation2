
let data=JSON.parse(localStorage.getItem('wallet'))

let amount=document.getElementById('wallet')
amount.innerText=data

const getData= async ()=>{
try{
    let res=await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
     let data=await res.json()
     //console.log('data',data)
    // console.log('vouchers',data[0].vouchers)
     let finalData=data[0].vouchers
     appendData(finalData)


}catch(error){
console.log('err',error)
}
}

getData()
let button=document.createElement('btn')
 button.id='buy'

const appendData=(data)=>{
    data.map((el)=>{
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

        
       // button.value='Buy'
       let btn=document.createElement('button')
     btn.id='buy'
     btn.innerHTML='Buy'
     btn.addEventListener('click',function (){
        buyProduct(el)
     })



        div.append(image,name,price,btn)

        document.getElementById('main').append(div)

    })
}

let voucharArr=JSON.parse(localStorage.getItem('purchases'))||[];

const buyProduct=(el)=>{

    voucharArr.push(el)

    localStorage.setItem('purchases',JSON.stringify(voucharArr))
}
