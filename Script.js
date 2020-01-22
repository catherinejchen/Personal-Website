// $.fn.characterize = function (wrapper, options) {
//   var txt = this.text(),
//       self = this;

//   this.empty();

//   wrapper = wrapper || '<span />';
//   options = options || {};

//   Array.prototype.forEach.call(txt, function (c) {
//     options.text = c;
//     self.append($(wrapper, options));
//   });
// };


// function animateHeader() {
//   var wlc = $('#header-text');

//   wlc.characterize('<span />', {
//     class: 'fd',
//     css: {
//       opacity: 0
//     }
//   });
  
//   wlc.css('opacity', 1);

//   $('.fd').each(function (i) {
//     $(this).delay(i* 750).animate({opacity: 1}, (i + 1) * 300);
//   });
// }


// animateHeader();


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

function sendContact() {
  jQuery.ajax({
      url: "mail.php",
      data:'fullname='+$("#fullname").val()+'&email='+
      $("#email").val()+'&phone='+
      $("#num").val()+'&subject='+
      $("#subject").val()+'content='+$("contact-message"),
      type: "POST",
      success:function(data){
          $("#mail-status").html(data);
      },
      error:function (){}
  });
}

$.fn.characterize = function (wrapper, options) {
  var txt = this.text(),
      self = this;

  this.empty();
  
  wrapper = wrapper || '<span />';
  options = options || {};

  Array.prototype.forEach.call(txt, function (c) {
    options.text = c;
    self.append($(wrapper, options));
  });
};

function animate () {
  var htxt = $('#header-text');

  htxt.characterize('<span />', {
    class: 'fd',
    css: {
      opacity: 0
    }
  });
  
  htxt.css('opacity', 1);

  $('.fd').each(function (i) {
    
    $(this).animate({opacity: 1}, 1000);
  });
}


animate();