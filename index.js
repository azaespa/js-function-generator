const form = document.querySelector("form");
const result = document.querySelector("#result");
const genButton = document.querySelector("#generate");
const copyButton = document.querySelector("#copy");

const empNumber = form.querySelector("#empNumber"),
      fName = form.querySelector("#fName"),
      lName = form.querySelector("#lName"),
      hDate = form.querySelector("#hDate"),
      email = form.querySelector("#email"),
      username = form.querySelector("#username");

function handleGenerate() {
  result.innerText = `addNew("${empNumber.value}", "${fName.value}", "${lName.value}", "${hDate.value}", "${email.value}", "${username.value}")`
}

function handleCopy() {
  result.select();
  document.execCommand('copy');
}

function init() {
  genButton.addEventListener("click", handleGenerate);
  copyButton.addEventListener("click", handleCopy)
}

init()