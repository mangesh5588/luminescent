$(document).ready(function () {

  $.getJSON("../src/data/products.json", function (data) {
    //console.log(data);

    var output = "<div class=row>";

    $.each(data, function (key, val) {
      output +=
        "<div class='col-lg-4 col-sm-6 portfolio-item targetView'><div class='card h-100' id='" + data[key]._id + "'><a class='markFav' href='#'> <i class=''></i></a><img class='card-img-top'" + "src=" + data[key].picture + " alt='img'/><div class='card-body'><h4 class='card-title'><a href='" + data[key].url + "'>" + data[key].name + "</a></h4><h5 class='card-size'>" + data[key].size + "<span class='rating'></span></h5><p class='price'>" + data[key].price + "<span class='oldPrice'>" + data[key].oldPrice + "</span><span class='savings'>You save " + data[key].savings + "</span></p></div></div></div>";

      setTimeout(function () {

        // Displays fav Icons
        data[key].isFav ? $('#' + data[key]._id + ' ' + 'i').addClass('fas fa-heart') : $('#' + data[key]._id + ' ' + 'i').addClass('far fa-heart');

        // Removes Undefined values of Old Price item
        $('#' + data[key]._id + ' ' + ".oldPrice").text() == 'undefined' ? $('#' + data[key]._id + ' ' + '.oldPrice').hide() : $('#' + data[key]._id + ' ' + '.oldPrice').show()

        // Removes Undefined values of Saving item
        $('#' + data[key]._id + ' ' + ".savings").text() == 'You save undefined' ? $('#' + data[key]._id + ' ' + '.savings').hide() : $('#' + data[key]._id + ' ' + '.savings').show()

        // Generating Rating Stars 
        star = '<i class="fas fa-star"> </i>';
        var ratingCount = data[key].rating;
        for (var j = 1; j <= ratingCount - 1; j++) {
          star += '<i class="fas fa-star"> </i>';
          $($('#' + data[key]._id + ' ' + ".rating")).html(star);
        }

        // Toggel Fav Icon
        $('#' + data[key]._id + ' ' + ".markFav").click(function () {
          if ($('#' + data[key]._id + ' ' + ".markFav i").hasClass("fas")) {
            $('#' + data[key]._id + ' ' + ".markFav i").removeClass("fas")
            $('#' + data[key]._id + ' ' + ".markFav i").addClass("far")
          }
          else if ($('#' + data[key]._id + ' ' + ".markFav i").hasClass("far")) {
            $('#' + data[key]._id + ' ' + ".markFav i").removeClass("far")
            $('#' + data[key]._id + ' ' + ".markFav i").addClass("fas")
          }
        });
      }, 1000);

    });

    output += "</div>";
    $("#displayData").html(output);

    // Gridview and List View click Events
    $("#btnListView").click(function () {
      $('.targetView').addClass('listView col-lg-12').removeClass('col-lg-4');
      $('.card .markFav').css('background', '#62a3db');
    });

    $("#btnGridView").click(function () {
      // console.log('btnGridView clicked');
      $('.targetView').removeClass('listView col-lg-12').addClass('col-lg-4');
      $('.card .markFav').css('background', '#FFF')
    });


    // Filter Data By Size 
    filterbySize = data.filter(function (item) {
      return item.size === 'M - Medium';
    });

    var dv = "<div class=row>"
    $.each(filterbySize, function (key, val) {
      //$(".show").append(newArr[key].price + '<br>');
      dv += ("<div class='col-lg-4 col-sm-6 portfolio-item targetView'><div class='card h-100' id='" + filterbySize[key]._id + "'><a class='markFav' href='#'> <i class=''></i></a><img class='card-img-top'" + "src=" + filterbySize[key].picture + " alt='img'/><div class='card-body'><h4 class='card-title'><a href='" + filterbySize[key].url + "'>" + filterbySize[key].name + "</a></h4><h5 class='card-size'>" + filterbySize[key].size + "<span class='rating'></span></h5><p class='price'>" + filterbySize[key].price + "<span class='oldPrice'>" + filterbySize[key].oldPrice + "</span><span class='savings'>You save " + filterbySize[key].savings + "</span></p></div></div></div>");
      setTimeout(function () {
        filterbySize[key].isFav ? $('#' + filterbySize[key]._id + ' ' + 'i').addClass('fas fa-heart') : $('#' + filterbySize[key]._id + ' ' + 'i').addClass('far fa-heart');
      }, 1000);
    })
    dv += "</div>";

    $('#selFilterSize').on('change', function () {
      var target = $('#selFilterSize option:selected').val();
      if (target == 2) {
        console.log(2)
        $("#displayData").html(dv);
      }
    });

  });

  // back to Top Button
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#anchorTop').fadeIn();
    } else {
      $('#anchorTop').fadeOut();
    }
  });
  $("#anchorTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Retrieved data with $.ajax method but on localhost server this method is not working.

  /*$("#retrieve-resources").click(function() {

  var displayData = $("#display-resources");

  displayData.text("Loading data from JSON source...");
   $.ajax({
      type: "GET",
      dataType: "json",
      url: "../src/data/products.json",
      success: function(result) {
        console.log(result);
        var output =
          "<table><thead><tr><th>Name</th><th>price</th><th>URL</th></thead><tbody>";
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].name +
            "</td><td>" +
            result[i].price +
            "</td><td>" +
            result[i].url +
            "</td></tr>";
        }
        output += "</tbody></table>";

        displayData.html(output);
        $("table").addClass("table");
      }
    }); */

});
