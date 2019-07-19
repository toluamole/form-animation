function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if (input.type === 'text' && validateUser(input)) {
        nextSlide(parent, nextForm);
      }else if( input.type ==='email' && validateEmail(input) ){
       nextSlide(parent, nextForm);
     }else if (input.type === 'password' && validateUser(input)) {
       nextSlide(parent, nextForm);
     } else {
       parent.style.animation = 'shake 0.5s ease';
     }
     parent.addEventListener('animationend', () => {
       parent.style.animation = '';
     })
    });
  })

};

function validateUser(user) {
  if( user.value.length < 6){
    console.log('minimum character of 6');
    colorChange("rgb(189, 87, 87)");
  } else{
    colorChange('rgb(87, 189, 130)');
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    return true;
  } else {
    colorChange("rgb(189, 87, 87)");
  }
}
function nextSlide(parent, nextForm) {
  parent.classList.add("innactive");
  parent.classList.remove('active');
  nextForm.classList.add('active');
}
function colorChange(color) {
  document.body.style.backgroundColor = color;
}
animatedForm();
