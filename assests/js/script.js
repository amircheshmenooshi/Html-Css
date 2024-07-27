function hide(name){
    var element = document.getElementById(name)

    element.style.opacity = 0
}

function remove(name){
    var element = document.getElementById(name)

    element.style.display = "none"
}

function reset(){
    location.reload(true)
}