import React from "react";

// Define a functional component called MessageAlert
const MessageAlert = (props) => {
  return (
    <div className="message-alert">
      {/* If message prop is not empty, render a Bootstrap alert with the message */}
      {props.message && (
        <div className="alert alert-info mt-3">
          <p>{props.message}</p>
        </div>
      )}

      {/* If error prop is not empty, render a Bootstrap alert with the error */}
      {props.error && (
        <div className="alert alert-danger mt-3">
          <p>{props.error}</p>
        </div>
      )}
    </div>
  );
};

// Export the MessageAlert component
export default MessageAlert;
