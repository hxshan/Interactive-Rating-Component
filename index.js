let rating_div = document.getElementById("rating-section")
let thank_div = document.getElementById("thank-section")
let submit_btn = document.getElementById("rating-submit")
let sel_rate = document.getElementById("selected")
let ratings = document.querySelectorAll(".btn")


ratings.forEach(function(rate){
    rate.addEventListener('click',function(){
        sel_rate.innerText=rate.innerText
        console.log(rate)
    })
    
})


submit_btn.addEventListener('click',function(){
    rating_div.style.display="none"
    thank_div.style.display="flex"

})

