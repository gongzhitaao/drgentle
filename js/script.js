(function($, undefined) {

function fill_pub_list() {

  $.getJSON('pub.json', function(data) {

    $('#pub-cnt').text(data.length);

    var i, tmp, a, b, c, list = $('<div/>');
    for (i = 0; i < data.length; ++i) {
      c = $('<div/>', {'class': 'row'});

      a = $('<div/>', {
        'class': 'col-lg-3 text-right',
        'style': 'padding-top: 20px'});

      b = $('<em/>').text(data[i].journal);
      a.append($('<p/>').append(b));

      b = $('<p/>', {'style': 'font-size: medium'})
          .text((data[i].volume ? "Volume " + data[i].volume : "") +
                (data[i].number ? ", Issue" + data[i].number : ""));
      a.append(b);

      if (data[i].pages) {
        b = $('<p/>', {'style': 'font-size: medium'})
            .text("Pages " + data[i].pages);
        a.append(b);
      }

      if (data[i].pdf) {
        b = $('<a/>', {'href': data[i].pdf})
            .append($('<i/>', {'class': 'fa fa-file-pdf-o'}));
        a.append(b);
      }

      c.append(a);

      a = $('<div/>', {'class': 'col-lg-9'});

      b = $('<h3/>').text(data[i].title);
      a.append(b);

      b = $('<em/>', {'style': 'font-size: medium'}).text(data[i].author);
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
