var asin = /[\w\d]{10}/;
var patt = /product\/([\w\d]{10})|dp\/([\w\d]{10})|ASIN\/([\w\d]{10})/; 

function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("Copy");
}

document.addEventListener('DOMContentLoaded', function() {

  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

    document.getElementById('input').value = (tabs[0].url).match(patt)[0].match(asin)[0];
    copy();
  });

  // var checkPageButton = document.getElementById('copy');
  // checkPageButton.addEventListener('click', function() {
  //   copy();

  // }, false);
}, false);