var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// ?? !! *need to fix
var modal = document.getElementById('modal01');
var modal = document.getElementById('modal02');
var modal = document.getElementById('modal03');
var modal = document.getElementById('modal04');
var modal = document.getElementById('modal05');
var modal = document.getElementById('modal06');
var modal = document.getElementById('modal07');
var modal = document.getElementById('modal08');
var modal = document.getElementById('modal09');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}