// var quotes = {
//     'name': 'saif welcom to test',
//     'oussema': 'always eat ',
//     'einestein': 'e=mc'
// }
$(function() {
    $.get('/quotes', appendToList);

    function appendToList(quotes) {
        var list = [];
        for (var i in quotes) {
            list.push($('<li>', { text: quotes[i] }));
        }
        $('.quote-list').append(list);
    }
});