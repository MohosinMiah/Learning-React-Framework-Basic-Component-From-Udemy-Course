import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
     <ExpenseItem date="March 28, 2021"></ExpenseItem>
    </div>
  );
}

export default App;
