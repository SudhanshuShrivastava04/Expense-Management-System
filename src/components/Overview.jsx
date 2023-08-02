import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddForm from "./AddForm";
function Overview() {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  const handleAddTxn = () => {
    toggleAddTxn(!isAddTxnVisible);
  };
  return (
    <div className="w-full flex flex-col items-center font-montserrat my-10">
      <div className="flex flex-row w-full items-stretch justify-between">
        <div className="w-1/2 flex flex-row gap-2">
          <h1 className="text-2xl text-primaryHeading font-semibold">
            Balance :{" "}
          </h1>
          <p className="text-2xl text-primaryHeading font-semibold">$100</p>
        </div>
        <button
          className="text-white bg-primaryHeading px-5 rounded-md text-xl hover:bg-gray-700 inline-flex items-center gap-2 duration-300"
          onClick={handleAddTxn}
        >
          {isAddTxnVisible ? "Close" : "Add"}
          <AiOutlinePlus
            style={{
              transform: isAddTxnVisible ? "rotate(225deg)" : "",
              transition: "all 0.3s",
            }}
          />
        </button>
      </div>
      <div className="w-full overflow-hidden" style={{ height: isAddTxnVisible ? "250px" : "0", transition: "all 0.3s" }}>
        <AddForm />
      </div>
    </div>
  );
}

export default Overview;
