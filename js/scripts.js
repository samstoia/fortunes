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

    if (total > 0 && total <= 5) {
      $("#fortune1").show();
      $("#fortune2").hide();
      $("#fortune3").hide();
      $("#fortune4").hide();
    }
    else if (total > 5 && total < 11) {
      $("#fortune2").show();
      $("#fortune1").hide();
      $("#fortune3").hide();
      $("#fortune4").hide();
    }
    else if (total > 10 && total < 16) {
      $("#fortune3").show();
      $("#fortune1").hide();
      $("#fortune2").hide();
      $("#fortune4").hide();
    }
    else if (total > 15 && total <= 20) {
      $("#fortune4").show();
      $("#fortune1").hide();
      $("#fortune2").hide();
      $("#fortune3").hide();
    }
    else if (total = 0) {
      alert("Choose at least one box to receive a fortune!")
    }
});

});
