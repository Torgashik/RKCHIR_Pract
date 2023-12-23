function showConfirmation(answer) {
    var messageElement = document.getElementById('message');
    if (answer === 'Да') {
        messageElement.innerHTML = 'Круто!';
    } else {
        messageElement.innerHTML = 'Попробуй ещё раз';
    }
}
$(function() {
    $(".heart").on("click", function() {
        $(this).toggleClass("is-active");
    });
});