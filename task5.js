// 5. Write a JavaScript function that would set the even li tags font color to red and the odd to green in ul

window.onload = function change_color() {
    var list = document.getElementsByTagName('li'); 
    for (var i = 0 ; i < list.length; i++) {
      if (i % 2 === 0) {
        list[i].style.color = 'green';
      } else {
        list[i].style.color = 'red'
      }
    }
  };