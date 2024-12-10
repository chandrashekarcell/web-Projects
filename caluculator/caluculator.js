let digitalclock=()=>{

    let dateobj=new Date()
   let selectedElement= document.getElementsByTagName('span')

   

   selectedElement[0].innerText=dateobj.getHours()
   selectedElement[1].innerText=dateobj.getMinutes()
   selectedElement[2].innerText=dateobj.getSeconds()
   selectedElement[3].innerText=dateobj.getDate()
   let curmun=dateobj.getMonth()+1
   switch(curmun){
    case 10:curmun='Oct'
    break;
   }
   selectedElement[4].innerText=curmun
   selectedElement[5].innerText=dateobj.getFullYear()


   let curday=dateobj.getDay()+1
   switch(curday){
    case 4:curday='Wendnesday'
    break
   }
   selectedElement[6].innerText=curday

   


}