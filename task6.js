// 6. Write a JavaScript program to get the width and height of the window (any time the window is resized).
function get_wh(){
    let width_window = document.documentElement.clientWidth ;
    let height_window = document.documentElement.clientHeight ;
    let paragraph = document.getElementById('myp1');
    paragraph.innerHTML = 'Window width is ' + width_window + ' and height is ' + height_window
}