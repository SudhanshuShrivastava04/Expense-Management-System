import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const TransactionSchema = Yup.object().shape({
  amount: Yup.number()
    .required("Amount is required")
    .min(0, "Amount must be a positive number"),
  description: Yup.string().required("Description is required"),
  type: Yup.string().required("Select either Expense or Income"),
});
function AddForm({ currentBalance, setCurrentBalance, onAddTransaction }) {
  const initialValues = {
    amount: "",
    description: "",
    type: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const initialBalance = 0;
    const amount = parseFloat(values.amount);
    const isExpense = values.type === "expense";

    const balance = isExpense
      ? currentBalance - amount
      : currentBalance + amount;
    setCurrentBalance(balance);
    console.log("New Balance:", balance);
    const transaction = {
      amount: parseFloat(values.amount),
      description: values.description,
      type: values.type,
    };
    onAddTransaction(transaction);
    resetForm();
  };
  return (
    <div className="w-full text-center my-5 border border-gray-200 rounded flex flex-col items-start gap-5 p-3">
      <Formik
        initialValues={initialValues}
        validationSchema={TransactionSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col items-start w-full gap-4">
          <div className="w-full">
            <Field
              name="amount"
              id="amount"
              type="number"
              placeholder="Amount"
              className="p-2 border border-gray-100 rounded w-full"
            />
            <ErrorMessage name="amount">
              {(msg) => (
                <div className="text-red-500 text-left text-sm">{msg}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="w-full">
            <Field
              name="description"
              type="text"
              id="description"
              placeholder="Description"
              className="p-2 border border-gray-100 rounded w-full"
            />
            <ErrorMessage name="description">
              {(msg) => (
                <div className="text-red-500 text-left text-sm">{msg}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="flex flex-row gap-5">
            <label className="flex flex-row items-center gap-1">
              <Field name="type" type="radio" value="income" />
              Income
            </label>
            <label className="flex flex-row items-center gap-1">
              <Field name="type" type="radio" value="expense" />
              Expense
            </label>
            <ErrorMessage name="type">
              {(msg) => (
                <div className="text-red-500 text-left text-sm self-end">
                  {msg}
                </div>
              )}
            </ErrorMessage>
          </div>
          <button
            className="bg-primaryHeading p-2 rounded-md md:text-xl text-md hover:bg-gray-700 text-white self-center"
            type="submit"
          >
            Add Transaction
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddForm;
