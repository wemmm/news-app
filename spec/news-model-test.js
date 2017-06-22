function testThatNewsHasArray(){
  news = new News();
  assert.isTrue(news.story.length === 0)
}

testThatNewsHasArray();

// function testThatNewsShowsContent(){
//   news = new News();
//   news.getStory();
//   assert.isTrue(news.story.length === 1)
// }
//
// testThatNewsShowsContent();
