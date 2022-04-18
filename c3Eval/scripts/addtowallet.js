let sum=0

function addToWallet(){
    let amount=document.getElementById('amount').value

    sum+=+(amount)

localStorage.setItem('wallet',(sum))
  
}