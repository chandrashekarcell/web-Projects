let input=document.querySelector('input')
let getValue =(e)=>{
    let val=e.target.innerText
    input.value+=val
}
 
let finalResult=()=>{
    let res=val(input.value) 
    input.value=res
}
let clearall=()=>{
    input.value=""
}