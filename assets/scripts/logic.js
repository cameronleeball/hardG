



$(document).ready(function () {


	var giff = {

		app() { 

			var topics = ["rick and morty", "battlestar galactica", "star wars", "the big lebowski"];
			var topic; 
			var topicBtn; 
			var userTop;
			var results;
			var freeze = "_still";
			function popTop() {
				$("#topics").empty();
				for (var i = 0; i < topics.length; i++) {
					topicBtn = $("<button class='btn btn-default topicBtns' data-text='" + topics[i] + "' data-state='still'>" + topics[i] + "</button>");
					$("#topics").append(topicBtn);

				};

			};

			popTop();

			$("#gifAdd").click(function() {

				event.preventDefault();

				topic = $("#userTopic").val();

				topics.push(topic);
				popTop();
				getGifs();
				$("#userTopic").val("");
				console.log(topic);
			});


			function getGifs() {
				$("#dispGifs").empty();
				var gifURL = "http://api.giphy.com/v1/gifs/search?q=" +
				topic + "&api_key=dc6zaTOxFJmzC&limit=10";

				$.ajax({
					url: gifURL,
					method: "GET"
				})
				.done(function(response) {
					results = response.data;

					for (var i = 0; i < results.length; i++) {

						var gifDiv = $("<div class='item'>");

						var rating = results[i].rating;

						var p = $("<p>").text("Rating: " + rating);

						gifImg = $("<img>");
						

						gifImg.attr("src", results[i].images.fixed_height_still.url);


						gifDiv.prepend(p);

						gifDiv.prepend(gifImg);

						$("#dispGifs").append(gifDiv);
					};
				});
			
			};

			function gifCall(event) {
				topic = $(this).attr("data-text");
				getGifs();
				var state = $(this).attr("data-state");
			};

			$(".btn").click(gifCall);
		}
	};
	giff.app();
});






		// var jsonURL = gifUrl ;
		// $.getJSON(jsonURL, function (json){
		// 	var imgList= "";
		// 	$.each(json.products, function () {
		// 		imgList += '<li><img src= "' + this.imgPath + '"></li>';
		// 	}
		// });
		// 	$('#dvProdList').append(imgList);
		// });