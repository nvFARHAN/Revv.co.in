



window.addEventListener('load', function() {
    var allPlusBtn = document.querySelectorAll('.plus');

    for( var i = 0; i < allPlusBtn.length; i++ ) {
        allPlusBtn[i].addEventListener('click', handlePlusMinus)
    }
    
})
    
function handlePlusMinus (e) {
    var plus_image = 'https://www.revv.co.in/grapheneImages/summary-page/plus-icon.png';
    var minus_image = 'https://www.revv.co.in/grapheneImages/summary-page/minus-icon.png';

        var parent = e.target.parentElement;
        var parentSibling = parent.nextElementSibling;

        if( e.target.src == plus_image ) {
            e.target.src = minus_image
            parentSibling.style.display = 'block'
        }
        else {
            e.target.src = plus_image
            parentSibling.style.display = 'none'
        }
}

var city = document.querySelectorAll(".city");
for (var i = 0; i < city.length; i++) {
  city[i].addEventListener("click", () => {
    var display = document.querySelector("#display");
    display.innerText = event.target.innerText;
    event.target.innerText += "        ";
    event.target.style.color = "#0dbaba";
    event.target.style.backgroundColor = "#cbe3e8";
  });
}



