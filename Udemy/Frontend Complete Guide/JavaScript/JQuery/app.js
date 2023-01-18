const firstNumber = $("#fNum");
const secondNumber = $("#sNum");
const calcBtn = $("#calcBtn");
const mathOperation = $("#drop-down");

mathOperation.change(() => {
  console.log(mathOperation.find("option:selected").text());
  /* Or can be also: console.log($("#drop-down option:selected").text()); */
  calcBtn.prop("disabled", false);
});

calcBtn.click(() => {
  let opChosen = mathOperation.find("option:selected").text();
  let operation = `${firstNumber.val()} ${opChosen} ${secondNumber.val()}`;
  alert(`The result for your operation is: ${eval(operation)}`);
});
