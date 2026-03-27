var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click", function(){
    if(check ==  0){

    

    istatus . innerHTML = "friends"
    istatus.style.color = "green"
    btn.innerHTML = "unfollow"
    check = 1
    }
    else{
        istatus . innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "follow"
        check = 0
    }
})

var heart = document.querySelector("#card")
var icon = document.querySelector("i")

heart.addEventListener("dblclick",function(){
      icon.style.transform = 'translate(-50%,-50%) scale(1)'
      icon.style.opacity = 0.8
      
      setTimeout(function(){
              icon.style.opacity = 0;

      },1000)


      setTimeout(function(){
              icon.style.transform = 'translate(-50%,-50%) scale(0)'

      },2000)
})