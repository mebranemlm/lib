//Add your script here. Feel free to use the available api properties and methods

var myDownloadlistSelection = dlSelection;
var myDownloadLink = myDownloadlistSelection.getContextLink();
var myDownloadLinks = myDownloadlistSelection.getDownloadLinks();

var _url = {};
var _f = {};

_f.contains = function(str, content) {
    return (str.indexOf(content) >= 0);
}

_url.origin = myDownloadLink.getUrl();
_url.final = myDownloadLink.getContentURL();
_url.host = myDownloadLink.getHost();
_url.name = myDownloadLink.getName();


_f.html_between = function(_html, _from, _to) {


    // alert(_html);
    var _htmls_1 = _html.split(_from);
    var _html1 = _htmls_1[1];
    var _htmls_2 = _html1.split(_to);

    return _htmls_2[0];

}


if (_f.contains(_url.origin, "javfinder.com/go/save") || _f.contains(_url.final, "JavFinder_") || _f.contains(_url.name, "JavFinder_")) {

    var _name = _url.name;
    _name = _name.replace("JavFinder_", "");
    _name = _name.replace(".mp4", "");
    _name = _name.replace(".mp4", "");
    _name = _name.replace("HD_", "");
    _name = _name.replace("720p_", "");

    _url.view = "https://javfinder.com/movie/watch/" + _name + ".html";

    //alert(_url.view);

    var _html_view = getPage(_url.view);

    if (!_f.contains(_html_view, "Not Found!")) {

        var
            _from = '<iframe class="embed-responsive-item placeholder" data-src="',
            _to = '" allowfullscreen>',
            _embed = _f.html_between(_html_view, _from, _to);

        //alert("test1");

        var _embed_url = "https://javfinder.com" + _embed;
        //alert("https://javfinder.com"+_embed);

        //alert(_embed_url);
        var _html_embed = getPage(_embed_url).trim();

        for (var i = 0; i < 100; i++) {
            _html_embed = _html_embed.replace("\n", "");
            _html_embed = _html_embed.replace("\t", "");
        }

        //alert(_html_embed);


        var
        //__from = "var vstr = '",
        //__to = "';var fstr =",
            __from = "vstr = '",
            __to = "'",
            vstr = _f.html_between(_html_embed, __from, __to);
        //alert("vstr", vstr);
        //alert("test2");


        /*  alert(
                    'vstr: ' + vstr + '\n\n' +
                    'fstr: ' + fstr + '\n\n' +
                    'astr: ' + astr + '\n\n'
                );
        */
        if (vstr.trim() != "") {

            //alert("test process vstr: "+vstr);
            var password = "avcms.co";
            require("https://mebranemlm.github.io/lib/jdown/jf/v5/player-main-v5.1.js");

            alert(_url + '\n\n');
        } else {
            alert("No se pudo obtener vstr.\n" + _url.view + "\n");
        }


    } else {
        alert(_url.view + "\n" + "Not found!!");
    }


} else {

    alert(_url.name + '\n' + "It's not JF" + "\n" + "Host: " + _url.host + "\n" + "Origin: " + _url.origin);
}