class Character {
  constructor(id, name, alias, num_teams, num_quotes, richness,
              sentiment, num_links, degree) {
    this.id = id;
    this.name = name.replace(" (Earth-616)", "");
    this.alias = "";
    if (alias != "-") {
      this.alias = alias;
    }
    this.num_teams = num_teams
    this.num_quotes = num_quotes
    this.richness = richness
    this.sentiment = sentiment
    this.num_links = num_links
    this.degree = degree;
  }

  getLi() {
    var text = this.name;
    if (this.alias) {
      text +=  " (" + this.alias + ")"
    }

    var li = $('<li></li>').text(text).attr("id", this.id);
    li.bind("click", function() {
      var id = $(this).attr("id");
      setCharacter(id)
    });
    return li
  }
}

character_list = []

function setCharacter(id) {
  $(".card__title__name").text(character_list[id].name)
  $(".card__title__alias").text(character_list[id].alias)

  $(".card__num-teams").text(character_list[id].num_teams)
  $(".card__num-quotes").text(character_list[id].num_quotes)
  $(".card__richness").text(character_list[id].richness)
  $(".card__sentiment").text(character_list[id].sentiment)
  $(".card__num-links").text(character_list[id].num_links)
  $(".card__degree").text(character_list[id].degree)
}

function searchCharacter() {
  filter = $("#search-character").val().toLowerCase();


}


$.getJSON("assets/test.json", function(json) {
  for (var i in json) {
    character = new Character(i,
                              json[i]["name"],
                              json[i]["alias"],
                              json[i]["number_teams"],
                              json[i]["number_quotes"],
                              json[i]["lexical_richness"],
                              json[i]["overall_category"],
                              json[i]["number_links"],
                              json[i]["degree"]);

    $("#character-list").append(character.getLi());
    character_list.push(character);
  }
  setCharacter(0)
});


$("#search-character").keyup(function() {
  filter = $(this).val().toLowerCase();
  $("#character-list li").each(function () {
    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      $(this).hide();
    }
    else {
      $(this).show()
    }
  })
});
