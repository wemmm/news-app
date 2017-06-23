(function(exports) {

  function NewsList(){
    this.newsArray = [];
    this.stories = []
    this.sectionURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics";
  }

NewsList.prototype.addNews = function (webtitle, content) {
  this.newsArray.push(new News(webtitle, content));
};

 NewsList.prototype.getstories = function () {
    var request =  new XMLHttpRequest();
    request.open('GET', this.sectionURL, true);
    var stories = this.stories
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        stories.push(data.response.results);
        stories = this.stories
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
