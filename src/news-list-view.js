(function(exports) {

  function NewsListView(newslist) {
  }

  NewsListView.prototype.generateHtml = function () {
    var result = [];
    newslist.newsArray.forEach(function(article) {
      result.push("<ul><li><div>" + article.webTitle + "</div></li></ul>");
    })
    return result.join(' ');
  };

exports.NewsListView = NewsListView;

})(this);
