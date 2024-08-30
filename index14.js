function addToInput(value) {
  document.getElementById("calculatorInput").value += value;
}
function deleteLast() {
  let input = document.getElementById("calculatorInput").value;
  document.getElementById("calculatorInput").value = input.substring(
    0,
    input.length - 1
  );
}

function resetCalculator() {
  document.getElementById("calculatorInput").value = "";
}

function calculate() {
  let input = document.getElementById("calculatorInput").value;
  try {
    let result = eval(input);
    document.getElementById("calculatorInput").value = result;
  } catch (error) {
    alert("Invalid input");
  }
}
