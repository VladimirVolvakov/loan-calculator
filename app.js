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
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    console.log(amount, interest, period);
    // Prevent default behaviour of form after being submitted:
    event.preventDefault();
};
