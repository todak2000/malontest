$(document).ready(function(){
    $.ajax({
        url:"https://newsapi.org/v2/top-headlines?country=ng&apiKey=4d67d588857541debb6a1bf3bea76710",
        method:"GET",
        success:function(data){
        processData(data);
        },
        error: function(err) {
            processDataError(data); 
        }
    });
});

function processData(data) {

    for (var i = 0; i < 20; i++) {
      var title = data.articles[i].title;
      var newsUrl = data.articles[i].url;
      var $news = $('<div class="card-footer"><a href="'+newsUrl+'"><h5 class="card-title">'+ title +'</h5></a></div>') 
      $(".card").append($news);
    }
}

function processDataError(data) {
    var $news = $('<div class="card-footer"><h5 class="card-title">No News Yet!. Try again Please</h5></div>') 
    $(".card").append($news);
    
}
