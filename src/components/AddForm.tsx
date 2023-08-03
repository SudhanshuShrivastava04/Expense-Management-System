import React from "react";
import { Formik, Field, Form } from "formik";

function AddModal() {
  return (
    <div className="w-full text-center my-5 border border-gray-200 rounded flex flex-col items-start gap-5 p-3">
      <Formik
        initialValues={{ amount: "", description: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="flex flex-col items-start w-full gap-4">
          <Field
            name="amount"
            type="number"
            placeholder="Amount"
            className="p-2 border border-gray-100 rounded w-full"
          />
          <Field
            name="description"
            type="text"
            placeholder="Description"
            className="p-2 border border-gray-100 rounded w-full"
          />
          <div className="flex flex-row gap-5">
            <label className="flex flex-row items-center gap-1">
              <Field name="add" type="radio" />
              Investment
            </label>
            <label className="flex flex-row items-center gap-1">
              <Field name="add" type="radio"  />
              Expense
            </label>
          </div>
          <button className="bg-primaryHeading p-2 rounded-md md:text-xl text-md hover:bg-gray-700 text-white self-center">Add Transaction</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddModal;
