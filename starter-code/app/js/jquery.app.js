var catList = $('#cats');

var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
      var catsTwo = JSON.parse(data)
      console.log(catsTwo);
      catList.append(catsTwo);
    });

