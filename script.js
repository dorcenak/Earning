function calculate() {
    // Retrieve user inputs
    const x2_1 = parseInt(document.getElementById("hours").value);
    const x_0 = parseInt(document.getElementById("minutes").value);

    // Calculate actual minutes worked based on input minutes from time sheet
    const x_0_0 = (x_0 * 60) / 100;

    // Calculate total minutes worked
    const x2 = multiplyBy(x2_1, x_0_0);

    // Calculate total hours and minutes worked
    const y2 = (x2 * 100) / 60;
    const y2_int = Math.floor(y2 / 100);
    const y2_rest = y2 % 100;

    // Calculate pay based on hours and minutes worked
    const get = y2_int * 2.19 + 0.028 * y2_rest;

    // Display result
    document.getElementById("result").innerHTML = `
        <p>You have worked for ${y2_int} hours and ${y2_rest.toFixed(2)} minutes.</p>
        <p>You will get at least ${get.toFixed(2)}$.</p>
    `;
}

// Function to calculate total minutes worked
function multiplyBy(x2_1, x2_2) {
    return x2_1 * 60 + x2_2;
}
