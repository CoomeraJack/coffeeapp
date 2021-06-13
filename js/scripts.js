function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// heart icon

  $(function() {
    $( "i" ).click(function() {
      $( "i,span" ).toggleClass( "press", 1000 );
    });
  });