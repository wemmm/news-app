(function(exports) {

  function NewsListView(newslist) {
  }

  NewsListView.prototype.generateHtml = function () {
    var result = [];
    newslist.newsArray.forEach(function(news) {
      result.push("<ul><li><div>" + news.webTitle + "</div></li></ul>");
    })
    return result.join(' ');
  };

exports.NewsListView = NewsListView;

})(this);
