$(document).ready(function(){
  $("form#fortune").submit(function(event) {
    event.preventDefault();

    var total = 0

    var array = ["ownership", "airline", "unlucky", "lucky", "apply"]

    for (i = 0; i < 5; i++) {

    $("input:checkbox[name="+array[i]+"]:checked").each(function(){
      var ownership = parseInt($(this).val());
      total += ownership;
    });

  };
alert(total)
});

});
