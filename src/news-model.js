(function(exports) {

  function News() {
    this.story = ""
  }

 // This doesn't work... yet.
  News.prototype.getStory = function () {
    var articleURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
    var summaryURL = "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
    jsonResult = {};
    jsonSummaryResult = {};
  };

exports.News = News;

})(this);
