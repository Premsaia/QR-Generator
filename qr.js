let generate = document.getElementById("generate")
let qr = document.getElementById("qr")
let text = document.getElementById("text")

generate.addEventListener("click",()=>{

    qr.innerHTML = ""
    let value = text.value
    if(value == ""){
        alert("Enter the valid text")
    }
    else{
        let img = document.createElement("img")
        let API = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+value
        img.src = API
        qr.appendChild(img)
    }

})