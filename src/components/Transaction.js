import { useState } from "react"; // Import the useState hook from React

import Button from "react-bootstrap/Button"; // Import the Button component from React-Bootstrap

// Define the Transaction component and receive props
function Transaction(props) {
  const [amount, setAmount] = useState(0); // Initialise the amount state with 0 and create a function to update it

  // Define a function to handle deposits
  function handleDeposit() {
    props.onDeposit(amount); // Call the onDeposit function from props and pass the amount
    setAmount(0); // Reset the amount state to 0
  }

  // Define a function to handle withdrawals
  function handleWithdraw() {
    props.onWithdraw(amount); // Call the onWithdraw function from props and pass the amount
    setAmount(0); // Reset the amount state to 0
  }

  return (
    <div className="d-flex flex-column mb-2">
      {/* Render a div with Bootstrap classes */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        // Input field for entering the amount
        // Update the amount state with the parsed float value from the input
      />
      <div className="transaction-btn mt-2">
        {/* Render two buttons */}
        <Button variant="primary" onClick={handleDeposit}>
          Deposit
        </Button>{" "}
        {/* Deposit button that calls handleDeposit on click */}
        <Button variant="danger" onClick={handleWithdraw}>
          Withdraw
        </Button>{" "}
        {/* Withdraw button that calls handleWithdraw on click */}
      </div>
    </div>
  );
}

export default Transaction;
