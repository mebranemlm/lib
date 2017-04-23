

   var Posts=[];
   console.log(1);

   var postTitle = new Array();     // array of posttitles
   var postUrl = new Array();       // array of posturls
   var postDate = new Array();      // array of post publish dates
   var postSum = new Array();       // array of post summaries
   var postLabels = new Array();    // array of post labels

// global variables
   var sortBy = "datenewest";         // default value for sorting ToC
   var tocLoaded = false;           // true if feed is read and ToC can be displayed
   var numChars = 250;              // number of characters in post summary
   var postFilter = '';             // default filter value
   var tocdiv = document.getElementById("bp_toc"); //web.archive.org/web/20160115102235/https://the toc container
   var totalEntires =0; //web.archive.org/web/20160115102235/https://Entries grabbed till now
   var totalPosts =0; //web.archive.org/web/20160115102235/https://Total number of posts in the blog.

// main callback function

function loadtoc(json) {

   function getPostData() {
   // this functions reads all postdata from the json-feed and stores it in arrays
      if ("entry" in json.feed) {
         var numEntries = json.feed.entry.length;
         totalEntires = totalEntires + numEntries;
         totalPosts=json.feed.openSearch$totalResults.$t
         if(totalPosts>totalEntires)
         {
         var nextjsoncall = document.createElement('script');
         nextjsoncall.type = 'text/javascript';
         startindex=totalEntires+1;
         nextjsoncall.setAttribute("src", "/feeds/posts/summary?start-index=" + startindex + "&max-results=500&alt=json-in-script&callback=loadtoc");
         tocdiv.appendChild(nextjsoncall);
         }
      // main loop gets all the entries from the feed
         for (var i = 0; i < numEntries; i++) {
         // get the entry from the feed
            var entry = json.feed.entry[i];

         // get the posttitle from the entry
            var posttitle = entry.title.$t;

         // get the post date from the entry
            var postdate = entry.published.$t.substring(0,10);

         // get the post url from the entry
            var posturl;
            for (var k = 0; k < entry.link.length; k++) {
               if (entry.link[k].rel == 'alternate') {
               posturl = entry.link[k].href;
               break;
               }
            }

         // get the post contents from the entry
         // strip all html-characters, and reduce it to a summary
            if ("content" in entry) {
               var postcontent = entry.content.$t;}
            else
               if ("summary" in entry) {
                  var postcontent = entry.summary.$t;}
               else var postcontent = "";
         // strip off all html-tags
            var re = /<\S[^>]*>/g; 
            postcontent = postcontent.replace(re, "");
         // reduce postcontent to numchar characters, and then cut it off at the last whole word
            if (postcontent.length > numChars) {
               postcontent = postcontent.substring(0,numChars);
               var quoteEnd = postcontent.lastIndexOf(" ");
               postcontent = postcontent.substring(0,quoteEnd) + '...';
            }

         // get the post labels from the entry
            var pll = '';
            if ("category" in entry) {
               for (var k = 0; k < entry.category.length; k++) {
                  pll += '<a href="javascript:filterPosts(\'' + entry.category[k].term + '\');" title="Click here to select all posts with label \'' + entry.category[k].term + '\'">' + entry.category[k].term + '</a>,  ';
               }
            var l = pll.lastIndexOf(',');
            if (l != -1) { pll = pll.substring(0,l); }
            }

         // add the post data to the arrays
			
			var post={
				title:posttitle,
				date:postdate,
				url:posturl,
				sum:postcontent,
				labels:pll
			};
			Posts.push(post);
			/*
            postTitle.push(posttitle);
            postDate.push(postdate);
            postUrl.push(posturl);
            postSum.push(postcontent);
            postLabels.push(pll);
			*/
         }
      }
      if(totalEntires==totalPosts) {tocLoaded=true;showToc();}
   } // end of getPostData

// start of showtoc function body
// get the number of entries that are in the feed
//   numEntries = json.feed.entry.length;

// get the postdata from the feed
   getPostData();

// sort the arrays
  // sortPosts(sortBy);
   tocLoaded = true;
}



// filter and sort functions


