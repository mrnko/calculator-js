let equalPressed = 0,
  buttonsInput = document.querySelectorAll('.calculator__input'),
  input = document.getElementById('input'),
  equal = document.getElementById('equal'),
  clear = document.getElementById('clear'),
  erase = document.getElementById('erase');

window.onload = () => {
  input.value = '';
}

buttonsInput.forEach((buttonInput) => {
  buttonInput.addEventListener('click', () => {
    if (equalPressed == 1) {
      input.value = '';
      equalPressed = 0;
    }

    input.value += buttonInput.value;

    if (buttonInput.value == '0' && input.value == '00') {
      input.value = input.value.substr(0, input.value.length - 1);
    }

    if (buttonInput.value == '/' && input.value == '/') {
      input.value = '';
    }

    if (buttonInput.value == '*' && input.value == '*') {
      input.value = '';
    }

    if (buttonInput.value == '-' && input.value == '-') {
      input.value = '';
    }

    if (buttonInput.value == '+' && input.value == '+') {
      input.value = '';
    }

    if (buttonInput.value == '.' && input.value == '.') {
      input.value = '';
    }
  })
});

equal.addEventListener('click', () => {
  equalPressed = 1;
  let inputValue = input.value;

  try {
    let solution = eval(inputValue);

    if (Number.isInteger(solution)) {
      input.value = solution;
    }
    else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    input.value = '';
  }
});

clear.addEventListener('click', () => {
  input.value = '';
});

erase.addEventListener('click', () => {
  input.value = input.value.substr(0, input.value.length - 1);
});