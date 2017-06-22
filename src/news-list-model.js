(function(exports) {

  function NewsList(){
    this.newsArray = [];
  }

NewsList.prototype.addNews = function (webtitle, content) {
  this.newsArray.push(new News(webtitle, content));
};

exports.NewsList = NewsList;

})(this);
