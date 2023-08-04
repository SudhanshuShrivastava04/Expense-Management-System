/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Transaction({ transactions }) {
  return (
    <div className="w-full flex flex-col items-center  font-montserrat my-5">
      <h1 className="md:text-2xl text-primaryHeading font-semibold text-left w-full">
        Transactions List
      </h1>
      {transactions.length === 0 && (
        <div className="text-lg bg-gray-200 px-5 py-2 rounded-md mt-10">No transactions found</div>
      )}
      <div className="w-full overflow-y-auto max-h-[6rem]">
        <ul className="w-full flex flex-col gap-4">
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className="w-[99%] bg-gray-200 p-2 rounded-md flex flex-row justify-between items-center"
              style={{
                borderRight:
                  transaction.type === "expense"
                    ? "10px solid red"
                    : "10px solid green",
              }}
            >
              <p className="text-xl">
                {transaction.type === "expense" ? "-" : "+"}
                {transaction.amount}
              </p>
              <p className="text-xl font-semibold">{transaction.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Transaction;
