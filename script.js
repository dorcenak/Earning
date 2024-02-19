function multiplyBy(x2_1, x2_2) {
    // Convert hours and minutes to total minutes
    return x2_1 * 60 + x2_2;
}

function calculate() {
    const x2_1 = parseInt(document.getElementById('entry_hours').value);
    const x2_2 = parseFloat(document.getElementById('entry_minutes').value);

    // Calculate total minutes worked
    const x2 = multiplyBy(x2_1, x2_2);
    const y2 = (x2 * 100) / 60;

    const y2_int = Math.floor(y2 / 100);
    const y2_rest = Math.floor(y2 % 100);

    const tax_check = document.querySelector('input[name="tax"]:checked').value;
    let income;
    if (tax_check === "Yes") {
        income = y2_int * 5.2374 + 0.08729 * y2_rest;
    } else {
        income = y2_int * 6.09 + 0.10 * y2_rest;
    }

    const resultLabel = document.getElementById('result_label');
    resultLabel.innerHTML = `You have worked for ${y2_int} hours and ${y2_rest} minutes (the minutes you saw in the system are not real-life minutes, that's why we converted them for you).<br>You will get at least <span id="currency">$</span><span id="incomeAmount">${income.toFixed(2)}</span>.`;

    // Apply bold style to the currency sign and income amount
    document.getElementById('currency').style.fontWeight = 'bold';
    document.getElementById('incomeAmount').style.fontWeight = 'bold';
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate_button');
    calculateButton.addEventListener('click', calculate);
});
