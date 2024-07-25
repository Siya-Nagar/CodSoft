let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function calculate(operator) {
  if (operator === '=') {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  } else if (operator === 'C') {
    clearResult();
  } else {
    appendToResult(operator);
  }
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}