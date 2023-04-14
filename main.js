var  a = document.getElementById ('c1')
var  b= document.getElementById ('c2')
var con =0
var c=0
a.addEventListener('click',change1)
b.addEventListener('mouseout',change3)
b.addEventListener('mouseover',change2)
b.addEventListener('click',change4)

function change1(){
    con++
    if(con==1){
        a.innerHTML="one more time" 
    }
    else if(con==2){
       a.innerHTML="just" 
    }
    else{
        c++
       a.style.display='none'
    }

}
function change2(){
    b.style.backgroundColor='red'
}
function change3(){
    b.style.backgroundColor=' rgb(49, 226, 43)'
}
function change4(){
    if(c==0){
        return
    }
    else if(c=!0){
        a.style.display='initial'
        c=0
        con=0
    }
}
