let rating_div = document.getElementById("rating-section")
let thank_div = document.getElementById("thank-section")
let submit_btn = document.getElementById("rating-submit")
let sel_rate = document.getElementById("selected")
let ratings = document.querySelectorAll(".btn")


ratings.forEach(function(rate){
    rate.addEventListener('click',function(){
        sel_rate.innerText=rate.innerText
    })
    
})


submit_btn.addEventListener('click',function(){
    rating_div.classList.remove("rating-container");
    rating_div.classList.add("hidden");

    thank_div.classList.remove("hidden");
    thank_div.classList.add("thank-section");

})

