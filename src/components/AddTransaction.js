import React, { useState, useContext } from "react";
import { Formik, Field, Form } from "formik";

// Import the Global State
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const action = () => {
    const newTransaction = {
      id: new Date().getTime(),
      description,
      transactionAmount: +transactionAmount,
    };

    addTransaction(newTransaction);
    setDescription("");
    setTransactionAmount("");
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <Formik
        initialValues={{
          description: "",
          amount: "",
        }}
        onSubmit={action}
      >
        <Form>
          <div className='form-control'>
            <label htmlFor='description'>Description</label>
            <Field
              type='text'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Detail of Transaction'
              required='required'
            />
          </div>
          <div className='form-control'>
            <label htmlFor='transactionamount'>Transaction Amount</label>
            <Field
              type='number'
              id='transactionamount'
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              placeholder='Dollar Value of Transaction'
              required='required'
            />
          </div>
          <button className='btn' type='submit'>
            Add Transaction
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTransaction;
