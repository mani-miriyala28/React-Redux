import './App.css'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import PizzaBox from './components/PizzaBox'
import BurgerBox from './components/BurgerBox'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <PizzaBox />
        <BurgerBox />
      </div>
    </Provider>
  )
}

export default App