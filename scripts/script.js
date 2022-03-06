const upButton = document.querySelector('.button-up');
const onTop = ()  => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
upButton.addEventListener('click', onTop);
