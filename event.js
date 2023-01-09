// function keydown(){
//     let down =document.getElementById('down').value;
//     console.log(down)
// }

// function keyup(){
//     let up =document.getElementById('up').value;
//     console.log(up)
// }

// function keypress(){
//     let press =document.getElementById('press').value;
//     console.log(press)
// }



// function down(e){
//     // alert("this is down event")
//     console.log(e)
// }


let isMouseState = false



document.getElementById('box').addEventListener('mouseup',(e)=>{
    isMouseState = false
    console.log("up : " + e)
    document.getElementById('box').style.backgroundColor = 'red'

})


document.getElementById('box').addEventListener('mousedown',(e)=>{
    isMouseState = true
    console.log("down : " + e)
    document.getElementById('box').style.backgroundColor = 'red'

})


document.getElementById('box').addEventListener('mousemove',(e)=>{
    if(isMouseState){}
    console.log("move : " + e)
    document.getElementById('box').style.backgroundColor = 'red'

})



