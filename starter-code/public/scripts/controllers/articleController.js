'use strict';
Article.fetchAll(articleView.initIndexPage);

(function(module) {
  const articleController = {};
  // DONE TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

  articleController.showArticles = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn('slow');
  }

  module.articleController = articleController;
})(window);
