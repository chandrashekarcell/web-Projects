// let loginpage=(e)=>{
//     e.preventDefault()
    
    // let color=(e)=>{
    
    //   if (color !== null && color !== "") {
    //     document.body.style.backgroundColor = color;
    //   } else {
    //     document.body.style.backgroundColor = "#ffffff"; // Default white
    //   }
      
    //   }



    let loginpage=(e)=>{
        e.preventDefault()


    let emailinput=e.target[0]
    let passwordinput=e.target[1]
    let credntials={
        useremail:"chandra@gmail.com" ,
        password:`12345`
    }
        let {useremail,password}=credntials


    let err=`  border: solid 2px red`
    if(emailinput.value===  useremail &&  passwordinput.value===password)
    {
        window.location=`./welcome.html`
    }
    else{
        emailinput.style.cssText=err;
        passwordinput.style.cssText=err;
    }
}