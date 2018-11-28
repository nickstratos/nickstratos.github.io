// Scrollspy //
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#collapse_navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
// End of Scrollspy //

// Send Email //
$(function($){
    $("#form").submit(function(event){
      event.preventDefault();
        $.ajax({
          url: "https://formspree.io/matiasalexis_12@hotmail.com", 
          method: "POST",
          data: {
            nombre: $("#nombre").val(),
            email: $("#email").val(),
            asunto: $("#asunto").val(),
            mensaje: $("#textarea").val(),
        },
          dataType: "json"
        }).done(function(){
          $("#nombre").val("");
            $("#email").val("");
            $("#asunto").val("");
            $("#textarea").val("");
          $(".formresponse").addClass("text-success").text("Mensaje enviado con éxito")         
        }).fail(function(){
          $(".formresponse").addClass("text-danger").text("Hubo un error en el envío de tu mensaje")
        });
    });
});
//End Email Send//