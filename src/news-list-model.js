(function(exports) {

  function NewsList(){
    this.newsArray = [];
    this.APIStories = [];
    this.sectionURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics";
  }

NewsList.prototype.addArticle = function (webtitle, content) {
  this.newsArray.push(new Article(webtitle, content));
};

 NewsList.prototype.getStories = function () {
    var request =  new XMLHttpRequest();
    request.open('GET', this.sectionURL, true);
    var APIStories = this.APIStories
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        APIStories.push(data.response.results);
        // console.log(APIStories[0][1]);
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
