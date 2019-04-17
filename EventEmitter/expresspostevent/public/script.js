$('form').on('submit', function(event) {
    event.preventDefault();

    var form = $(this);
    var quotes = form.serialize();

    $.ajax({
        type: '/POST',
        url: '/quotes',
        data: quoteData
    }).done(function(quotesName) {

        appendToList([quotesName]);
        form.trigger('reset');
    });

})