 var fb_likes = [
//"desnudandola", //banned
//"Antonio-Piñero-II-Página-oficial-815697295137995",
"JesusHistorico",
//"CarldeGreasse",
//"CdeCiencia",
//"latinoshield",
//"ArrowversoDC",
"TitansLat",
//"LuciferLatinoamerica",
//"The-100-Latinoamerica-1532932343619252",
//"SupernaturalLatinoamerica",
"jehova.org", 
"supermanjaviolivares", 
"lapulgasnob", 
"LetyDoesStuff",

//web posts
"https://www.gatapop.com/modelo/fernanda-abraao/",
//"http://kateelife.com/", //banned
//"https://www.youtube.com/watch?v=q9ZNI6f567c", //kandor reto mr...
//"http://contra-molinosdeviento.blogspot.com/2011/05/la-evolucion-explicada-creacionistas.html",
"https://www.instagram.com/p/BL9Fk7yhmbr/", //dln
"https://dln.la/", 
//"https://www.youtube.com/watch?v=9aNK0fQfd5I", //Vary Ingweion
"https://www.instagram.com/p/BzH2IR0D1qL/", //Lety
"https://hentai2read.com/azusattack/",
];


function dolikes(num) {
if(!num) num = 3
  var html = "";
  fb_likes.random().slice(0, num).forEach(function (like, i) {
    if (!like.includes("//")) like = "https://www.facebook.com/" + like;
    html += "<div class=\"fb-like\" data-action=\"like\" data-href=\"".concat(like, "\" data-layout=\"button_count\" data-share=\"false\" data-show-faces=\"true\" data-size=\"small\" data-width=\"\">\n</div> ");
  });
  var sdiv = $("<div>");
  var s = $("<script>");
  s.attr("async");
  s.attr("defer");
  s.attr("crossorigin", "anonymous");
  s.attr("src", "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v4.0");
  sdiv.append("<div id=\"fb-root\"></div>");
  sdiv.append(s);
  $("body").prepend(sdiv);
  $("#likebtns").html("<center>***</center><br/><center>Dale click a los botones azules \"me gusta\" que aparecen abajo:</center><br/>\n<center>".concat(html, "</center>"));
}

//dolikes(3);
