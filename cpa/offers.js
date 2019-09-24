var cpa_offers = [
    {
        name: "Completa una encuesta completa para obtener tu recompensa!",
        titles: ["Completa una encuesta para obtener tu recompensa!"],
        imgs: ["https://i.imgur.com/PhX1ekv.jpg", "https://i.imgur.com/axbPXP0.png", "https://i.imgur.com/bxcUBCa.png"],
        countries: ["PE","MX"],
        url: "http://ito.mx/LCSM",
        web: "CPALead",
        user: "liber...",
        status: "A",
        type: "email"
    }
];


//// FUNCTIONS

function cpa_html(country_code){
    var country=country_code;
    console.log(country_code);
    var offers = cpa_offers.filter(function (v, i) {
      return v.countries.indexOf(country) != -1 && v.status == "A";
    });
    offers.random().forEach(function (cpa_offer, i) {
      var cpa_title = cpa_offer.titles.random()[0];
      var cpa_url = cpa_offer.url;
      var cpa_img = cpa_offer.imgs.random()[0];
      var html = "<div class=\"cpa_title\">\n\t\t\t\t<b>".concat(cpa_title, " Click aqu\xED:</b>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<a href=\"").concat(cpa_url, "\">\n\t\t\t\t\t<img width=\"100%\" src=\"").concat(cpa_img, "\"></img>\n\t\t\t\t</a>\n\t\t\t</div>");
      $("#cpa" + (i + 1)).html(html);
    }
};

/*
var API = "https://api.ipdata.co/?api-key=test";
$.ajax({
    url: API,
    success: function success(result) {
        console.log("result", result);
        var country = result.country_code;
        console.log(country);
        var offers = cpa_offers.filter(function (v, i) {
            return v.countries.indexOf(country) != -1 && v.status == "A";
        });
        offers.random().forEach(function (cpa_offer, i) {
            var cpa_title = cpa_offer.titles.random()[0];
            var cpa_url = cpa_offer.url;
            var cpa_img = cpa_offer.imgs.random()[0];
            var html = `<div class="cpa_title">
				<b>${cpa_title} Click aquí:</b>
			</div>
			<div>
				<a href="${cpa_url}">
					<img width="100%" src="${cpa_img}"></img>
				</a>
			</div>`;
            $("#cpa" + (i+1)).html(html);
        });
    }
});
*/
