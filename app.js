// Get access to Calculate button:
const calculateButton = document.querySelector('#calculate-button');

// Event listener for Calculate button:
calculateButton.addEventListener('click', getResults);

// Calculate results function
function getResults (event) {
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

    // Check if monthly payment is a finite number & show results to user:
    if (isFinite(monthlyPayment)) {
        monthlyPaymentOutput.value = monthlyPayment.toFixed(2);
        totalPaymentOutput.value = totalPayment.toFixed(2);
        totalInterestOutput.value = totalInterest.toFixed(2);
    }

    // Prevent default behaviour of form after being submitted:
    event.preventDefault();
};
