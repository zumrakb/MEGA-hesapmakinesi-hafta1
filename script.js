const calculator_input = document.querySelector(".calculator-input"); // hesap makinesinde tıkladığımız tuşları ve hesaplama sonucunu gösteren ekran.
const buttons = document.querySelectorAll("button"); //hesap makinesindeki tuşlar.

// tüm "button" elementlerine "for" döngüsü ile eventlistener ekliyoruz:
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleButtonClick);
}

function handleButtonClick(event) {
  const buttonValue = event.target.value; // bastığımız butonun değerini alıyoruz. mesela, 9'a basınca 9 değeri almış olacağız.

  // switch case ile tıkladığımız tuşa göre bir function çalıştırıp sonuca ulaşıyoruz:
  switch (buttonValue) {
    case "=":
      resultCalculation();
      break;
    case "clear":
      clearCalculation();
      break;

    default:
      appendToInput(buttonValue);
      break;
  }
}

//Operator Functionları:

function resultCalculation() {
  try {
    let result = eval(calculator_input.value); // eval function, verilen matematiksel ifadeyi hesaplamak için önceden oluşturulmuş bir function'dır.
    calculator_input.value = result;
  } catch (error) {
    calculator_input.value = "Error";
  }
}
function clearCalculation() {
  calculator_input.value = "";
}
function appendToInput(value) {
  calculator_input.value += value;
}
