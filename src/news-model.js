(function(exports) {

  function News() {
    this.story = []
    this.articleURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
  }

 // This doesn't work... yet.
  News.prototype.getStory = function () {
    var request =  new XMLHttpRequest();
    request.open('GET', this.articleURL, true);
    var story = this.story
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        story.push(data.response.content.webTitle);
        console.log(story);
      } else {
        console.log("MASSIVE ERROR")
      }
    };

    request.onerror = function() {
      console.log("oh nooooo")
    };

  request.send();

  };

  // News.prototype.assignStory = function () {
  //   console.log(this.getStory());
  //   // console.log(this.story)
  // };

exports.News = News;

})(this);
