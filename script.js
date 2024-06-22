function multiplyBy(x2_1, x2_2) {
    // Convert hours and minutes to total minutes
    return x2_1 * 60 ;
}

function calculate() {
    let entryHours = document.getElementById('entry_hours').value.trim();
    let entryHoursFloat = parseFloat(entryHours)

    // const entryMinutes = document.getElementById('entry_minutes').value.trim();

    // Check if both hours and minutes are provided
    // if (entryHours === '' || entryMinutes === '') {
    if (entryHoursFloat === '') {
        alert('Please enter both hours and minutes. We only accept numbers.');
        return; // Exit the function early if validation fails
    }

    // Proceed with calculation if both inputs are provided
    let x2_1 = entryHoursFloat;
    // const x2_2 = parseFloat(entryMinutes);

    // Calculate total minutes worked
    // let totalMinutes = multiplyBy(x2_1);
    //
    // Convert total minutes to hours
    let totalHours =x2_1;

    let income;

    // Get the selected level rate
    let levelRate = parseFloat(document.getElementById('level').value);

    // Calculate gross income based on the selected level rate
    let grossIncome = x2_1 * levelRate;

    let payTaxesYes = document.getElementById('pay_taxes_yes');
    let payTaxesNo = document.getElementById('pay_taxes_no');

    // Check if the user specified that they don't pay taxes
    let payTaxes = payTaxesYes.checked;

    if (!payTaxes) {
        income = grossIncome; // If the user doesn't pay taxes, net income equals gross income
    } else {
        // Calculate tax
        let taxRate = 0.14;
        let taxAmount = grossIncome * taxRate;

        // Calculate net income after tax deduction
        income = grossIncome - taxAmount;
    }

    let resultLabel = document.getElementById('result_label');
    resultLabel.innerHTML = `You have worked for ${totalHours} hours.<br>Your gross income is $${grossIncome.toFixed(2)}.<br>After ${(payTaxes ? '14% tax deduction' : 'no tax deduction')}, your net income is $${income.toFixed(2)}.`;

    // Apply bold style to the income amounts
    resultLabel.style.fontWeight = 'bold';

    // Set a minimum height for the square container
    let minSquareHeight = 650; // Adjust as needed
    let square = document.querySelector('.square');
    square.style.height = minSquareHeight + 'px';

    // Calculate the height of the content
    let contentHeight = resultLabel.clientHeight;

    // Adjust the height of the square container if the content exceeds the minimum height
    if (contentHeight > minSquareHeight) {
        square.style.height = contentHeight + 'px';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let calculateButton = document.getElementById('calculate_button');
    calculateButton.addEventListener('click', calculate);
});
