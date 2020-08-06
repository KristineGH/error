// 4. Write a JavaScript function to add "LI" to a list element "UL"
window.onload = function add_event(){
    let button = document.getElementById('but1')
    button.addEventListener('click', add_list)
}

function add_list(){
    let input = document.getElementById('tt1')
    let list = document.getElementById('ul1')

    let val = `
        <li>` + input.value + `</li>
    `
    input.value = ``
    list.innerHTML = list.appendChild(val)

    let button = document.getElementById('but1')
    button.addEventListener('click', add_list)
}