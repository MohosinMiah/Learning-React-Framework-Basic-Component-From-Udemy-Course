import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  

  return (
    <div className="App">
     <h1>App Component</h1>
     <NewExpense></NewExpense>
     <Expenses></Expenses>

    </div>
  );
}

export default App;
