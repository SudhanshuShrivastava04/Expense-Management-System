import Overview from "./Overview";
import Transaction from "./Transaction";

function ExpenseTracker() {
  return (
    <div className="w-full flex flex-col items-center font-montserrat">
      <Overview />
      <Transaction />
    </div>
  );
}

export default ExpenseTracker;
