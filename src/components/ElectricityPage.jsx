import React, { useState } from 'react';

export function ElectricityPage() {
  const [customerName, setCustomerName] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [unitsConsumed, setUnitsConsumed] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any action on form submission, like sending data to a server or displaying a success message.

    // For demonstration purposes, let's just set a success message on form submission.
    setPaymentStatus('Payment successful! Thank you.');
    // Reset the form fields after successful payment (you might want to update this based on your actual use case)
    setCustomerName('');
    setMeterNumber('');
    setUnitsConsumed('');
    setAmount('');
  };

  return (
    <div className="container">
      <h1>Welcome to our Electricity Billing System</h1>
      <form className="billing-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="meterNumber">Meter Number:</label>
          <input
            type="text"
            id="meterNumber"
            name="meterNumber"
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="unitsConsumed">Units Consumed:</label>
          <input
            type="number"
            id="unitsConsumed"
            name="unitsConsumed"
            value={unitsConsumed}
            onChange={(e) => setUnitsConsumed(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount (in $):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Pay Now</button>
        </div>
        {paymentStatus && <p>{paymentStatus}</p>}
      </form>
    </div>
  );
}
