// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    code: 'document.getElementsByClassName("shared-post__sidebar")[0].remove(); document.getElementsByClassName("shared-post__headings")[0].remove();'
  });
});
