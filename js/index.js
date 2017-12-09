$(document).ready(function(){
  var text = '';
  var author = '';
  //Run function "random" when DOM is ready
  random(); 
  // Run function "random" on click
  $("#quote-btn").on("click", random);
  
  // FUNCTION "RANDOM" for pulling random images and quotes
    function random() {
 // Generate random quote from Quotes on Design API. Note: copied from website; the url was edited to include the main domain and an extra set of }); was removed for code to work.
      $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        author = ' -'+ post.title;
        text = post.content;
        var length = author.length+text.length;
        $('#quote-author').text(author);
        $('#quote-text').html(text);
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
      //FUNCTION "TWITTER" for creating a tweet using Twitter's API on click
      $("#tweet-btn").on("click", function () {     window.open('https://twitter.com/intent/tweet?text='+text+author);
  });
      //images array
      var images = ["https://images.pexels.com/photos/163123/coffee-flowers-notebook-work-desk-163123.jpeg?w=940&h=650&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/5201/menu-coffee-outside-cafe.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
"https://images.pexels.com/photos/176103/pexels-photo-176103.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
"https://images.pexels.com/photos/196651/pexels-photo-196651.jpeg?w=940&h=650&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/228184/pexels-photo-228184.jpeg?w=940&h=650&auto=compress&cs=tinysrgb", "https://images.pexels.com/photos/189263/pexels-photo-189263.jpeg?w=940&h=650&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/33974/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/249580/pexels-photo-249580.jpeg?w=940&h=650&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/235208/pexels-photo-235208.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
];
      // Generate random image from images array.
      $('body').css({'background': '#ffffff url(' + images[Math.floor(Math.random() * images.length)] + ') no-repeat fixed center', 'background-size': 'cover'});
    };
});