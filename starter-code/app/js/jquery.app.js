$("document").ready(function() {
 	var catList = document.getElementById('cats');
	function makeCats(data) {
		for(var i = 0; i < data.length; i++) {
			var cats = document.createElement("li");
			cats.innerHTML = (data[i].name + " - " + data[i].note);
			catList.appendChild(cats);
		}
	}
	function createCat(name, note) {
		var cat = {
			"name": name,
			"note": note
		}
		$.ajax({
			type: "POST",
			url: "https://ga-cat-rescue.herokuapp.com/api/cats",
			data: JSON.stringify(cat)
		}).done(function() {
			$.get("https://ga-cat-rescue.herokuapp.com/api/cats", function(data){
				var newCats = JSON.parse(data);
				var newCat = newCats[newCats.length-1];
				var name = newCat.name;
				var note = newCat.note;
				var cat = document.createElement("li");
				cat.innerHTML = (name + " - " + note);
				catList.prepend(cat);
			})
		});
	}
	$.ajax({
		url: "https://ga-cat-rescue.herokuapp.com/api/cats"
		}).done(function(data) {
		var catData = JSON.parse(data);
		makeCats(catData);
	});
	$("#new-cat").on("submit", function(e) {
		e.preventDefault();
		var name = $("#cat-name").val();
		var note = $("#cat-note").val();
		createCat(name, note);
	});
});