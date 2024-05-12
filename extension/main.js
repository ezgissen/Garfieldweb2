document.addEventListener('DOMContentLoaded', function() {
    var highlightBtn = document.getElementById('highlightBtn');
  
    highlightBtn.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {highlight: true});
      });
    });
  });
  