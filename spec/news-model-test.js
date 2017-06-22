function testThatNewsShowsContent(){
  news = new News();
  news.getStory();
  assert.isFalse(news.story.length === 0)
}

testThatNewsShowsContent();
