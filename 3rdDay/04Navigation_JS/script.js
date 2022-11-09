var navStatus=0;
function openNav(){
   if(!navStatus){
    $('.mainDiv').css('width','100%')
    $('li').css('display','block')
    navStatus=1
   } 
   else{
    $('.mainDiv').css('width','0')
    $('li').css('display','none')
    navStatus=0
   }
}