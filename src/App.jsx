import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  return (
    <div className="grid place-items-center bg-gradient-to-r from-[#24C6DC] to-[#514A9D] h-[100vh]">
      <div className="flex flex-col items-center bg-white rounded-md shadow-lg w-1/2 p-5">
        <h1 className="text-center font-montserrat text-primaryHeading font-bold text-3xl">Expense Management System</h1>
        <ExpenseTracker />
      </div>
    </div>
  );
}

export default App;
