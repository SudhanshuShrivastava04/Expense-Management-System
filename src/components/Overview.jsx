import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddForm from "./AddForm";
import Transaction from "./Transaction";

function Overview() {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  const handleAddTxn = () => {
    toggleAddTxn(!isAddTxnVisible);
  };
  return (
    <div className="w-full flex flex-col items-center font-montserrat my-10">
      <div className="flex flex-row w-full md:items-stretch items-center justify-between">
        <div className="md:w-1/2 w-full flex flex-row gap-2">
          <h1 className="md:text-2xl text-primaryHeading font-semibold">
            Balance :{" "}
          </h1>
          <p className="md:text-2xl text-primaryHeading font-semibold">
            ${currentBalance}
          </p>
        </div>
        <button
          className="text-white bg-primaryHeading md:px-3 px-2 rounded-md md:text-xl hover:bg-gray-700 inline-flex items-center gap-2 duration-300"
          onClick={handleAddTxn}
        >
          {isAddTxnVisible ? "Close" : "Add"}
          <AiOutlinePlus
            style={{
              transform: isAddTxnVisible ? "rotate(405deg)" : "",
              transition: "all 0.7s",
            }}
          />
        </button>
      </div>
      <div
        className="w-full overflow-hidden"
        style={{
          height: isAddTxnVisible ? "16rem" : "0",
          transition: "all 0.3s",
        }}
      >
        <AddForm
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
          onAddTransaction={handleAddTransaction}
        />
      </div>
      <Transaction transactions={transactions} />
    </div>
  );
}

export default Overview;
