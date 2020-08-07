// 2. Write a JavaScript program to set the background color of a paragraph from an input type= color.
function change_color(){
    let paragraph = document.getElementById('myP') ;
    let color = document.getElementById('color').value
    paragraph.style.background = color ;   
    
}