const btn = document.querySelector('readmore-btn');
const snippet = document.querySelector('#snippet');

$(function() {
    $('.readmore-btn').on('click', function() {
        $(this).parent().toggleClass('showContent')
    });
})