var cpa_offers = [
	
    /*
    {
        name: "",
        titles: [""],
        imgs: [""],
        countries: [""],
	o_url:"",
        url: "",
        web: "CPALead",
        user: "liber...",
        status: "A",
        type: "email"
    },
    */
    {
        name: "Dinero Por Hablar Espa�ol",
        titles: ["Hablas español? Regístrate gratis y gana hasta 70$ por encuesta!"],
        imgs: ["https://i.imgur.com/oodwsbb.jpg",
	       "https://i.imgur.com/lP3UB2K.png",
	       "https://i.imgur.com/DINlASt.jpg"],
        countries: ["US"],
	o_url:"https://viral481.com/srv.html?id=5481394&pub=951688",
        url: "http://ito.mx/LCTF",
        web: "CPALead",
        user: "liber...",
        status: "A",
        type: "email"
    },
	
    {
        name: "Win New Iphone 11",
        titles: ["Win New Iphone 11!"],
        imgs: ["https://i.imgur.com/IIjbtV0.jpg","https://i.imgur.com/WbGa1aI.jpg"],
        countries: ["US"],
	o_url:"https://viral481.com/srv.html?id=5481135&pub=951688",
        url: "http://ito.mx/LCTy",
        web: "CPALead",
        user: "liber...",
        status: "A",
        type: "email"
    },

   {
        name: "Sign up to win a $1000 Walmart card",
        titles: ["Sign up to win a $1000 Walmart card!"],
        imgs: ["https://i.imgur.com/DuoFek9.png","https://i.imgur.com/9Jsgflc.jpg"],
        countries: ["US"],
	o_url:"https://viral481.com/srv.html?id=5481667&pub=951688",
        url: "http://ito.mx/LCTp",
        web: "CPALead",
        user: "liber...",
        status: "A",
        type: "email"
    },
    {
        name: "Completa una encuesta completa para obtener tu recompensa!",
        titles: ["Completa una encuesta para obtener tu recompensa!"],
        imgs: ["https://i.imgur.com/PhX1ekv.jpg", "https://i.imgur.com/axbPXP0.png", "https://i.imgur.com/bxcUBCa.png"],
        countries: ["MX"],
        url: "http://tiny.cc/vqfedz",
        web: "CPALead",
        user: "liber...",
        status: "A",
        type: "email"
    },

];


//// FUNCTIONS

function cpa_html(country_code){
   	var country = country_code;
	console.log(country);
	var offers = cpa_offers.filter(function (v, i) {
  		return v.countries.indexOf(country) != -1 && v.status == "A";
	});
	offers.random().forEach(function (cpa_offer, i) {
  		var cpa_title = cpa_offer.titles.random()[0];
  		var cpa_url = cpa_offer.url;
  		var cpa_img = cpa_offer.imgs.random()[0];
  		var html = "<div class=\"cpa_title\">\n\t\t\t\t<b><a href=\"".concat(cpa_url, "\">").concat(cpa_title, " Click aqu\xED:</a></b>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<a href=\"").concat(cpa_url, "\">\n\t\t\t\t\t<img width=\"100%\" src=\"").concat(cpa_img, "\"></img>\n\t\t\t\t</a>\n\t\t\t</div>");
  		$("#cpa" + (i + 1)).html(html);
	});
};

/*
var API = "https://api.ipdata.co/?api-key=test";
$.ajax({
    url: API,
    success: function success(result) {
        console.log("result", result);
        var country_code = result.country_code;
	
	var country=country_code
        console.log(country);
        var offers = cpa_offers.filter(function (v, i) {
            return v.countries.indexOf(country) != -1 && v.status == "A";
        });
        offers.random().forEach(function (cpa_offer, i) {
            var cpa_title = cpa_offer.titles.random()[0];
            var cpa_url = cpa_offer.url;
            var cpa_img = cpa_offer.imgs.random()[0];
            var html = `<div class="cpa_title">
				<b><a href="${cpa_url}">${cpa_title} Click aquí:</a></b>
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
