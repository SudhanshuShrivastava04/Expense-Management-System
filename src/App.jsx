import ExpenseTracker from "./components/ExpenseTracker";
import "./App.css";

function App() {
  return (
    <div className="grid place-items-center gradient-bg h-[100vh] overflow-y-hidden">
      <div className="flex flex-col items-center bg-white rounded-md shadow-lg md:w-1/2 w-full  mx-auto md:mx-0 p-5 max-h-[100vh]">
        <h1 className="text-center font-montserrat text-primaryHeading font-bold md:text-3xl text-xl">Expense Management System</h1>
        <ExpenseTracker />
      </div>
    </div>
  );
}

export default App;
