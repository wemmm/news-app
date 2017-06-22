(function(exports) {

  function News(webtitle, content) {

    this.webTitle = webtitle;
    this.content = content;
        // this.articleURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
  }


  

  // News.prototype.getStory = function () {
  //   var request =  new XMLHttpRequest();
  //   request.open('GET', this.articleURL, true);
  //   var story = this.story
  //   request.onload = function() {
  //     if (request.status >= 200 && request.status < 400) {
  //       var data = JSON.parse(request.responseText);
  //       story.push(data.response.content.webTitle);
  //       console.log(story);
  //     } else {
  //       console.log("MASSIVE ERROR")
  //     }
  //   };
  //
  //   request.onerror = function() {
  //     console.log("oh nooooo")
  //   };
  //
  // request.send();
  //
  // };
  //

exports.News = News;

})(this);
