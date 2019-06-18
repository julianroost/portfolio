$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var naam = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/naam',
        data: naam,
        success: function(data){
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/naam/' + item,
        success: function(data){
          location.reload();
        }
      });
  });

});
