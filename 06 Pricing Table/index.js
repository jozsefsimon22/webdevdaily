let on = false;

document.querySelector(".slider").addEventListener("click", function(){
    if(!on){
        document.querySelectorAll(".price").forEach( e =>{
            console.log(e.innerHTML)
            const amount = (e.innerHTML * 12 )* 0.75;
            e.innerHTML = amount;
            console.log(amount)
        })

        document.querySelectorAll(".frequency").forEach(e => {
            e.innerHTML = "year"
        })
        on = true;
    }
    else{
        document.querySelectorAll(".price").forEach( e =>{
            console.log(e.innerHTML)
            const amount = (e.innerHTML / 12 )/ 0.75;
            e.innerHTML = amount;
            console.log(amount)
        })
        document.querySelectorAll(".frequency").forEach(e => {
            e.innerHTML = "month"
        })
        on = false;
    }
})
