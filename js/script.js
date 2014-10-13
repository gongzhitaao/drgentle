(function($, undefined) {

function fill_pub_list() {
  $.getJSON('../pub.json', function(data) {
    $('#pub-cnt').text(data.length);

    var i, tmp, a, b, c, list = $('<div/>');
    for (i = 0; i < data.length; ++i) {
      c = $('<div/>', {'class': 'row'});

      a = $('<div/>', {'class': 'col-lg-3'});

      b = $('<h4/>', {'style': 'margin-top: 30px'}).text(data[i].publisher);
      a.append(b);

      b = $('<p/>').text(data[i].location);
      a.append(b);

      c.append(a);

      a = $('<div/>', {'class': 'col-lg-9'});

      b = $('<h3/>').text(data[i].title);
      a.append(b);

      b = $('<p/>').text(data[i].abstract);
      a.append(b);

      c.append(a);

      list.append(c);
    }

    $('#pub-list').append(list.html());
  });
}

$(document).ready(function(){

  fill_pub_list();

});

})(jQuery);
