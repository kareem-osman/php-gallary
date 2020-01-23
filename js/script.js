let ul=document.querySelectorAll(".gallary-item li")
let img_v=document.querySelectorAll(".gallary .box-img")
for(let li of ul){
    li.addEventListener("click",function(e){
        ul.forEach(i=> i.classList.remove("active"))
        li.classList.add("active")
        let filterl=li.getAttribute("filter")
        for(let img of img_v){
            console.log(img)
            img.style.display="none"
        }
        let targetel=document.querySelectorAll(".gallary "+filterl)
        targetel.forEach(i=> i.style.display="block")


    })
}