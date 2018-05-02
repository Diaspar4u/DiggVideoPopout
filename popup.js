//chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//  if (changeInfo.status == 'complete') {

var url = document.getElementsByClassName('digg-story__hattip-link')[0]['href'];
//alert(url);
window.location = url;
/*
    var url = document.getElementById('js--embed-code-iframe').attr('src');
    alert('before: ', url);
    var videoid = url.split('?')[0].substr(30);
    alert('videoid: ', videoid);
    var newurl = 'http://www.youtube.com/watch?v=' + videoid;
    alert('redirecting to:', newurl);
    window.location = newurl;
*/
//  }
//})




//document.addEventListener('DOMContentLoaded', function() {
  /*
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false); */
//}, false);