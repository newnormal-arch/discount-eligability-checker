function checkEligibility() {
    let memberAge = parseInt(document.getElementById("member-age").value);
    let checkboxValue = document.getElementById("member-checkbox").checked;
    let resultMessage = document.getElementById("resultMessage");

    if (memberAge <= 64 && checkboxValue == true) {
        resultMessage.innerHTML = "Congratulations ! You qualify for a discount";
    } else if (memberAge >= 65) {
        resultMessage.innerHTML = "Congratulations ! You qualify for a senior discount.";
    } else if (memberAge >= 18 && checkboxValue == false) {
        resultMessage.innerHTML = "Sorry, you need to be a member to qualify";
    } else if (memberAge < 18 && checkboxValue == true){
        resultMessage.innerHTML = "Sorry, you need to be 18 or older to qualify";
    } else {
        resultMessage.innerHTML = "Sorry, you need to be 18 or older, and a member to qualify";
    }
}