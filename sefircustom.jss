            <script>/*<![CDATA[*/ 
document.getElementById(".dark-mode");

var randomRelatedIndex, showRelatedPost;
(function(n, m, k) {
  var d = {
    widgetTitle: "<h3 class='heading'>Related Posts</h3>",
    widgetStyle: 1,
    homePage: "http://www.jagodesain.com",
    numPosts: 7,
    summaryLength: 320,
    titleLength: "auto",
    thumbnailSize: 200,
    noImage: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    containerId: "related-posts",
    newTabLink: false,
    moreText: "Daha Fazla Oku",
    callBack: function() {}
  };
  for (var f in relatedPostConfig) {
    d[f] = (relatedPostConfig[f] == "undefined") ? d[f] : relatedPostConfig[f]
  }
  var j = function(a) {
      var b = m.createElement("script");
      b.async = "async";
      b.rel = "preload";
      b.src = a;
      k.appendChild(b)
    },
    o = function(b, a) {
      return Math.floor(Math.random() * (a - b + 1)) + b
    },
    l = function(a) {
      var p = a.length,
        c, b;
      if (p === 0) {
        return false
      }
      while (--p) {
        c = Math.floor(Math.random() * (p + 1));
        b = a[p];
        a[p] = a[c];
        a[c] = b
      }
      return a
    },
    e = (typeof labelArray == "object" && labelArray.length > 0) ? "/-/" + l(labelArray)[0] : "",
    h = function(b) {
      var c = b.feed.openSearch$totalResults.$t - d.numPosts,
        a = o(1, (c > 0 ? c : 1));
      j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Series" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost")
    },
    g = function(z) {
      var s = document.getElementById(d.containerId),
        x = l(z.feed.entry),
        A = d.widgetStyle,
        c = d.widgetTitle + '<ul class="pl-0 m-0 grid gtc-f141a gg-20 slide rel lsn ul style-' + A + '">',
        b = d.newTabLink ? ' target="_blank"' : "",
        y = '<!-- <div class="clear"/> -->',
        v, t, w, r, u;
      if (!s) {
        return
      }
      for (var q = 0; q < d.numPosts; q++) {
        if (q == x.length) {
          break
        }
        t = x[q].title.$t;
        w = (d.titleLength !== "auto" && d.titleLength < t.length) ? t.substring(0, d.titleLength) + "&hellip;" : t;
        r = ("media$thumbnail" in x[q] && d.thumbnailSize !== false) ? x[q].media$thumbnail.url.replace("s72","w210-h270") : d.noImage;
        u = ("summary" in x[q] && d.summaryLength > 0) ? x[q].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.summaryLength) + "&hellip;" : "";
        for (var p = 0, a = x[q].link.length; p < a; p++) {
          v = (x[q].link[p].rel == "alternate") ? x[q].link[p].href : "#"
        }
        if (A == 2) {
          c += '<li><div class="grid gtc-1001fr gg-10"><div class="item-thumbnail imgItem full-i h-220 relative b-img oh"><a href="' + v + '"><img class="post-thumb lazy" alt="' + w + '" src="' + r + '"></a></div><div class="item-title clamp toe oh block fs-15 lh-20 yt8m ck m-0"><a href="' + v + '"><span>' + w + '</span></a></div></div></li>'
        } else {
          c += '<li><div class="item-related"><div class="item-thumbnail"><div><img class="post-thumb lazy" alt="' + w + '" src="' + r + '"></div></div><div class="item-title"><a href="' + v + '"><span>' + w + '</span></a></div></div></li>'
        }
      }
      s.innerHTML = c += "</ul>";
      d.callBack()
    };
  randomRelatedIndex = h;
  showRelatedPost = g;
  j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary/-/Series" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
})(window, document, document.getElementsByTagName("head")[0]);

/*]]>*/</script>
          </div>
        </b:includable>
        <b:includable id='postPagination-numeric'>
          <script>/*<![CDATA[*/
var noPage,currentPage,currentPageNo,postLabel,
perPage=20,
numPages=3,
firstText="First",
lastText="Last",
prevText="Previous",
nextText="Next",

urlactivepage=location.href,home_page="/";function looppagecurrentg(e){var a="";pageNumber=parseInt(numPages/2),pageNumber==numPages-pageNumber&&(numPages=2*pageNumber+1),pageStart=currentPageNo-pageNumber,pageStart<1&&(pageStart=1),lastPageNo=parseInt(e/perPage)+1,lastPageNo-1==e/perPage&&(lastPageNo-=1),pageEnd=pageStart+numPages-1,pageEnd>lastPageNo&&(pageEnd=lastPageNo),a+="<span class='showpageOf'>Page "+currentPageNo+" of "+lastPageNo+"</span>";var t=parseInt(currentPageNo)-1;currentPageNo>1&&(a+="page"==currentPage?'<span class="showpage firstpage"><a href="'+home_page+'">'+firstText+"</a></span>":'<span class="displaypageNum firstpage"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+firstText+"</a></span>"),currentPageNo>2&&(a+=3==currentPageNo?"page"==currentPage?'<span class="showpage"><a href="'+home_page+'">'+prevText+"</a></span>":'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">'+prevText+"</a></span>":"page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+t+');return false">'+prevText+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+t+');return false">'+prevText+"</a></span>"),pageStart>1&&(a+="page"==currentPage?'<span class="displaypageNum"><a href="'+home_page+'">1</a></span>':'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>'),pageStart>2&&(a+=" ... ");for(var s=pageStart;s<=pageEnd;s++)a+=currentPageNo==s?'<span class="pagecurrent">'+s+"</span>":1==s?"page"==currentPage?'<span class="displaypageNum"><a href="'+home_page+'">1</a></span>':'<span class="displaypageNum"><a href="/search/label/'+postLabel+"?&max-results="+perPage+'">1</a></span>':"page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+s+');return false">'+s+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+s+');return false">'+s+"</a></span>";pageEnd<lastPageNo-1&&(a+="..."),pageEnd<lastPageNo&&(a+="page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastPageNo+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastPageNo+"</a></span>");var r=parseInt(currentPageNo)+1;currentPageNo<lastPageNo-1&&(a+="page"==currentPage?'<span class="displaypageNum"><a href="#" onclick="redirectpage('+r+');return false">'+nextText+"</a></span>":'<span class="displaypageNum"><a href="#" onclick="redirectlabel('+r+');return false">'+nextText+"</a></span>"),currentPageNo<lastPageNo&&(a+="page"==currentPage?'<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage('+lastPageNo+');return false">'+lastText+"</a></span>":'<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel('+lastPageNo+');return false">'+lastText+"</a></span>");for(var p=document.getElementsByName("pageArea"),n=document.getElementById("blog-pager"),l=0;l<p.length;l++)p[l].innerHTML=a;p&&p.length>0&&(a=""),n&&(n.innerHTML=a)}function totalcountdata(e){var a=e.feed;looppagecurrentg(parseInt(a.openSearch$totalResults.$t,10))}function pagecurrentg(){var e=urlactivepage;-1!=e.indexOf("/search/label/")&&(postLabel=-1!=e.indexOf("?updated-max")?e.substring(e.indexOf("/search/label/")+14,e.indexOf("?updated-max")):e.substring(e.indexOf("/search/label/")+14,e.indexOf("?&max"))),-1==e.indexOf("?q=")&&-1==e.indexOf(".html")&&(-1==e.indexOf("/search/label/")?(currentPage="page",currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata"><\/script>')):(currentPage="label",-1==e.indexOf("&max-results=")&&(perPage=20),currentPageNo=-1!=urlactivepage.indexOf("#PageNo=")?urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length):1,document.write('<script src="'+home_page+"feeds/posts/summary/-/"+postLabel+'?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')))}function redirectpage(e){jsonstart=(e-1)*perPage,noPage=e;var a=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),a.appendChild(t)}function redirectlabel(e){jsonstart=(e-1)*perPage,noPage=e;var a=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.setAttribute("src",home_page+"feeds/posts/summary/-/"+postLabel+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost"),a.appendChild(t)}function finddatepost(e){post=e.feed.entry[0];var a=post.published.$t.substring(0,19)+post.published.$t.substring(23,29),t=encodeURIComponent(a);if("page"==currentPage)var s="/search?updated-max="+t+"&max-results="+perPage+"#PageNo="+noPage;else s="/search/label/"+postLabel+"?updated-max="+t+"&max-results="+perPage+"#PageNo="+noPage;location.href=s}void 0===firstText&&(firstText="First"),void 0===lastText&&(lastText="Last"),pagecurrentg();
 /*]]>*/</script>
