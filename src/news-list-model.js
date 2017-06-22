(function(exports) {

  function NewsList(){
    this.newsArray = [];
    this.story = []
    this.articleURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics";
  }

NewsList.prototype.addNews = function (webtitle, content) {
  this.newsArray.push(new News(webtitle, content));
};

 NewsList.prototype.getStory = function () {
    var request =  new XMLHttpRequest();
    request.open('GET', this.articleURL, true);
    var story = this.story
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        story.push(data.response.results);
        story = this.story
      } else {
        console.log("MASSIVE ERROR")
      }
    };

   request.onerror = function() {
      console.log("oh nooooo")
    };

 request.send();

 };

exports.NewsList = NewsList;

})(this);
