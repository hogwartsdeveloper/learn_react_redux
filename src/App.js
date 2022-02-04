import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)

  const addMoney = (cash) => {
      dispatch({type: "ADD_CASH", payload: cash})
  }

  const getMoney = (cash) => {
      dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div style={{fontSize: '2rem'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addMoney(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getMoney(Number(prompt()))}>Снять с счета</button>
      </div>
    </div>
  );
}

export default App;
