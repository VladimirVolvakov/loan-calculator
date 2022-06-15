// Get access to Calculate button:
const calculateButton = document.querySelector('#calculate-button');

// Event listener for Calculate button:
calculateButton.addEventListener('click', (event) => {
    // Get access to div#loader & div#results:
    const loader = document.querySelector('#loader');
    const results = document.querySelector('#results');
    // Make div#loader visible:
    loader.style.display = 'block';
    // Get calculation results:
    getResults();
    // Hide loader in 0.2 seconds:
    setTimeout(() => {
        loader.style.display = 'none';
        results.style.display = 'block';
    }, 200);
    // Prevent default behaviour of form after being submitted:
    event.preventDefault();
});

// Calculate results function
function getResults () {
    // Get access to entered values from UI:
    const amount = document.querySelector('#amount').value;
    const interest = document.querySelector('#interest').value;
    const period = document.querySelector('#period').value;
    const monthlyPaymentOutput = document.querySelector('#monthly-payment');
    const totalPaymentOutput = document.querySelector('#total-payment');
    const totalInterestOutput = document.querySelector('#total-interest');
    // Parse string to decimal values:
    const sumOfLoan = parseFloat(amount);
    const interestPerMonth = parseFloat(interest) / (100 * 12);
    const paymentPeriodInMonths = parseFloat(period) * 12;
    // Monthly payment calculation:
    const yield = Math.pow(1 + interestPerMonth, paymentPeriodInMonths);
    const monthlyPayment = (sumOfLoan * yield * interestPerMonth) / (yield - 1);
    // Total payment calculation:
    const totalPayment = monthlyPayment * paymentPeriodInMonths;
    // Total interest calculation:
    const totalInterest = totalPayment - sumOfLoan;

    // Check if monthly payment is a finite number & show results / error to user:
    if (isFinite(monthlyPayment)) {
        monthlyPaymentOutput.value = monthlyPayment.toFixed(2);
        totalPaymentOutput.value = totalPayment.toFixed(2);
        totalInterestOutput.value = totalInterest.toFixed(2);
    } else {
        showError('Please enter correct data');
    };
};

// Show error function:
function showError (message) {
    // Create a div element alert message:
    const div = document.createElement('div');
    // Make red background for alert message:
    div.className = 'alert alert-danger';
    // Create a text node and append it inside created element:
    const divText = document.createTextNode(message);
    div.appendChild(divText);
    // Get appropriate elements to insert alert div:
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // Insert alert div before heading:
    card.insertBefore(div, heading);
    // Hide alert div after 2 seconds:
    setTimeout(() => {
        div.remove();
    }, 2000);
};
