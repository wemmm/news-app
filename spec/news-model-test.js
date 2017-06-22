function testThatNewsHasArray(){
  news = new News();
  assert.isTrue(news.story === [])
}

testThatNewsHasArray();

// function testThatNewsShowsContent(){
//   news = new News();
//   news.getStory();
//   assert.isEqual((news.story.length), 1)
// }
//
// testThatNewsShowsContent();
