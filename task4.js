// 4. Write a JavaScript function to add "LI" to a list element "UL"
window.onload = function add_event(){
    let button = document.getElementById('but1') ;
    button.addEventListener('click', add_list) ;
}

function add_list(){
    let input = document.getElementById('tt1') ;
    let list = document.getElementById('ul1') ;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    input.value = `` ;
    list.appendChild(li) ;

    
    button.addEventListener('click', add_list) ;
}