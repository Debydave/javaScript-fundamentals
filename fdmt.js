// account details
let fcmb = {
    name: "Deborah David",
    balance: 8000,
    accountNumber: "2788187017"
};

let zenithBank = {
    name: "Annet Etim",
    balance: 2500,
    accountNumber: "2467439990"
};

// Function to transfer money
function transferMoney(sender, receiver, amount) {
    if (sender.balance >= amount) {
        sender.balance -= amount;
        receiver.balance += amount;
        return true;
    } else {
        return false;
    }
}

// Function to display account details
function displayAccountDetails(account) {
    alert(`Account Number: ${account.accountNumber}\nBank Name: ${account.name}\nBalance: N${account.balance}`);
}

// The main function for transferring money
function transferMoneyApp() {
    alert("Welcome to FCMB ATM machine!");

    let amount = parseFloat(prompt("Enter the amount to transfer:"));
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a valid amount.");
        return;
    }

    // request for confirmation
    let confirmation = confirm(`Transfer N${amount} from ${fcmb.name} to ${zenithBank.name}?`);
    if (!confirmation) {
        alert("Transaction cancelled.");
        return;
    }

    // Transfer money
    if (transferMoney(fcmb, zenithBank, amount)) {
        alert(`Money transferred successfully!\n${fcmb.name} balance: N${fcmb.balance}\n${zenithBank.name} balance: N${zenithBank.balance}`);
    } else {
        alert("Insufficient balance. Transaction failed.");
    }
}


transferMoneyApp();
