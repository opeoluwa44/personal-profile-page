const header = document.querySelector("header")
const headerText = document.querySelector(".title")
const list = document.querySelectorAll(".list-item")
const menubar = document.querySelector(".menu")
const sidebar = document.querySelector("#sidebar")


window.addEventListener("scroll", ()=>{
    if(window.scrollY>=180){
        header.classList.add('show-background')
        headerText.classList.add('white')

    }else{
        header.classList.remove('show-background')
        headerText.classList.remove('white')

    }
    return ()=> {
        // so we don't have too much event listener active
        window.removeEventListener("scroll")
    }
});



list.forEach(item=> {
    item.addEventListener("click", function() {
        list.forEach(item=> {
            item.classList.remove("active")
        })

        console.log(list)

        this.classList.add("active")

    })

})


menubar.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-menulist")
})