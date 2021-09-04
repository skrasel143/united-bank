// Transaction page

// Get input value using function
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
};

// Get inner text using function
function getBalance(balanceId) {
    const  balanceText = document.getElementById(balanceId);
    const balance = parseFloat(balanceText.innerText);
    return balance;
};

// Get total balance text using function
function getTotal() {
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceText.innerText);
    return totalBalance;
}

// Deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const deposit = getInput('deposit-input');
    const depositBalance = getBalance('deposit-balance');
    if (deposit > 0) {
        document.getElementById('deposit-balance').innerText = depositBalance + deposit; 
    // Total balance
        const totalBalance = getTotal();
        document.getElementById('total-balance').innerText = totalBalance + deposit;
    } else {
        alert('Please input a valid amount');
    }
});

// Withdraw button handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = getInput('withdraw-input');
    const withdrawBalance = getBalance('withdraw-balance');
    const totalBalance = getTotal();
    if (withdraw > 0 && totalBalance >= withdraw) {
        document.getElementById('withdraw-balance').innerText = withdrawBalance + withdraw;

        // Total balance 
        document.getElementById('total-balance').innerText = totalBalance - withdraw;
        document.getElementById('deposit-balance').innerText = '00';
        
    } else {
        alert('Please input a valid amount');
    }
        
});
