


$("button").click(function(){
    $.getJSON("https://pmalhotra21.github.io/pmalhotra21/data.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
      });
    });
  });

