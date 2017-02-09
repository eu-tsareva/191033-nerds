var feedbackPopup = document.querySelector('.modal-content-feedback');

var contactButton = document.querySelector('.contacts-btn');
contactButton.addEventListener('click',
  function(event) {
    event.preventDefault();
    feedbackPopup.classList.add('modal-content-show');
    feedbackPopup.querySelector('.form-field').focus();
  });

var closePopupButtons = document.getElementsByClassName('modal-content-close');
for (var i = 0; i < closePopupButtons.length; i++) {
  closePopupButtons[i].addEventListener('click',
    function(event) {
      event.preventDefault();
      this.parentNode.classList.remove('modal-content-show');
    }
  );
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    var openedPopup = document.querySelector('.modal-content-show');
    if (openedPopup) {
      openedPopup.classList.remove("modal-content-show");
    }
  }
});

var showMenu = document.querySelector('.page-menu-btn');
var mainMenu = document.querySelector('.page-menu-btn+ul');

document.querySelector('body').addEventListener('click', function(event) {
  if(mainMenu.classList.contains('open')) {
     mainMenu.classList.remove('open');
  }
});
