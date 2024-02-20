function multiplyBy(x2_1, x2_2) {
    // Convert hours and minutes to total minutes
    return x2_1 * 60 + x2_2;
}

function calculate() {
    const entryHours = document.getElementById('entry_hours').value.trim();
    const entryMinutes = document.getElementById('entry_minutes').value.trim();

    // Check if both hours and minutes are provided
    if (entryHours === '' || entryMinutes === '') {
        alert('Please enter both hours and minutes. We only accept numbers.');
        return; // Exit the function early if validation fails
    }

    // Proceed with calculation if both inputs are provided
    const x2_1 = parseInt(entryHours);
    const x2_2 = parseFloat(entryMinutes);

    // Calculate total minutes worked
    const totalMinutes = multiplyBy(x2_1, x2_2);

    // Convert total minutes to hours
    const totalHours = totalMinutes / 60;

    let income;

    // Get the selected level rate
    const levelRate = parseFloat(document.getElementById('level').value);

    // Calculate gross income based on the selected level rate
    let grossIncome = totalHours * levelRate;

    const payTaxesYes = document.getElementById('pay_taxes_yes');
    const payTaxesNo = document.getElementById('pay_taxes_no');

    // Check if the user specified that they don't pay taxes
    const payTaxes = payTaxesYes.checked;

    if (!payTaxes) {
        income = grossIncome; // If the user doesn't pay taxes, net income equals gross income
    } else {
        // Calculate tax
        const taxRate = 0.14;
        const taxAmount = grossIncome * taxRate;

        // Calculate net income after tax deduction
        income = grossIncome - taxAmount;
    }

    const resultLabel = document.getElementById('result_label');
    resultLabel.innerHTML = `You have worked for ${totalHours.toFixed(2)} hours.<br>Your gross income is $${grossIncome.toFixed(2)}.<br>After ${(payTaxes ? '14% tax deduction' : 'no tax deduction')}, your net income is $${income.toFixed(2)}.`;

    // Apply bold style to the income amounts
    resultLabel.style.fontWeight = 'bold';

    // Set a minimum height for the square container
    const minSquareHeight = 650; // Adjust as needed
    const square = document.querySelector('.square');
    square.style.height = minSquareHeight + 'px';

    // Calculate the height of the content
    const contentHeight = resultLabel.clientHeight;

    // Adjust the height of the square container if the content exceeds the minimum height
    if (contentHeight > minSquareHeight) {
        square.style.height = contentHeight + 'px';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate_button');
    calculateButton.addEventListener('click', calculate);
});
