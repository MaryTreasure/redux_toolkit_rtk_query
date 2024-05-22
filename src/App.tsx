import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import userSlice from './store/reducers/userSlice';
import {increment, decrement} from './store/reducers/userSlice';

function App() {
  const {count} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(5))} disabled = {count === 100}>INCREMENT</button>
      <button onClick={() => dispatch(decrement(5))} disabled = {count === 0}>DECREMENT</button>
    </div>
  );
}

export default App;
