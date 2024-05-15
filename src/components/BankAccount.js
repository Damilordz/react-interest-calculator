import React, { useState } from "react"; // Import the React library and the useState hook
import Transaction from "./Transaction"; // Import the Transaction component
import Button from "react-bootstrap/Button"; // Import the Button component from React-Bootstrap
import MessageAlert from "./MessageAlert";

// Define the BankAccount component
function BankAccount() {
  const [currentBalance, setBalance] = useState(250); // Initialise the currentBalance state with 250 and create a function to update it
  const [message, setMessage] = useState(""); // Initialise the message state with an empty string and create a function to update it
  const [error, setError] = useState(""); // Initialise the error state with an empty string and create a function to update it

  // Define a function to handle deposits
  function handleDeposit(amount) {
    if (amount <= 0 || isNaN(amount)) {
      // If the amount is 0, negative or not a number
      setError("Please enter a valid positive number."); // Set an error message
      setMessage(""); // Clear any previous message
    } else {
      setBalance(currentBalance + amount); // Update the balance by adding the deposited amount
      setError(""); // Clear any previous error
      setMessage(`£${amount.toFixed(2)} deposited successfully!`); // Set a success message
    }
  }

  // Define a function to handle withdrawals
  function handleWithdraw(amount) {
    if (amount <= 0 || isNaN(amount)) {
      // If the amount is 0, negative  or not a number
      setError("Please enter a valid positive number."); // Set an error message
      setMessage(""); // Clear any previous message
    } else if (amount > currentBalance) {
      // If the amount is greater than the current balance
      setError("Insufficient funds!"); // Set an error message
      setMessage(""); // Clear any previous message
    } else {
      setBalance(currentBalance - amount); // Update the balance by subtracting the withdrawn amount
      setError(""); // Clear any previous error
      setMessage(`£${amount.toFixed(2)} withdrawn. Take your cash!`); // Set a success message
    }
  }

  // Define a function to handle interest calculations
  function handleInterest(rate) {
    const interest = currentBalance * (rate / 100); // Calculate the interest amount
    setBalance(currentBalance + interest); // Update the balance by adding the interest
    setError(""); // Clear any previous error
    setMessage(`£${interest.toFixed(2)} interest added to your account.`); // Set a success message
  }

  // Define a function to handle bank fees
  function handleFees(fee) {
    setBalance(currentBalance - fee); // Update the balance by subtracting the fee
    setError(""); // Clear any previous error
    setMessage(`£${fee.toFixed(2)} bank fee charged.`); // Set a success message
  }

  return (
    <div className="card d-flex flex-column justify-content-center p-4">
      {/* Render the BankAccount component */}
      <div className="bank-title">
        <h2>Bank Account</h2>
      </div>
      <div className="bank-details">
      <h5 className="mb-2">Welcome back!</h5>
        {/* Display the current balance */}
        <h6>Current Balance: £{currentBalance.toFixed(2)}</h6>
      </div>
      {/* Render the Transaction component and pass the handleDeposit and handleWithdraw functions as props */}
      <Transaction onDeposit={handleDeposit} onWithdraw={handleWithdraw} />

      <div>
        {/* Button to add 5% interest */}
        <Button variant="success" onClick={() => handleInterest(5)}>
          Add 5% Interest
        </Button>{" "}
        {/* Button to charge a £10 bank fee */}
        <Button variant="warning" onClick={() => handleFees(10)}>
          Charge £10 Bank Fee
        </Button>{" "}
      </div>

      {/* Render the MessageAlert component and pass the message and error as props */}
      <MessageAlert message={message} error={error} />
    </div>
  );
}

export default BankAccount;
