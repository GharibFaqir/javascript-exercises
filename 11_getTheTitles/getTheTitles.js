const getTheTitles = function(books) {
    title = [];
    for (i=0; i <= books.length-1; i++) {
        title[i] = books[i].title;
    }
    return title;
};

books = [{title: 'book1', author: 'name1'}, {title: 'book2', author: 'name2'}];
getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
