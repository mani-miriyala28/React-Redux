import './App.css'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import PizzaBox from './components/PizzaBox'
import BurgerBox from './components/BurgerBox'
import Products from './components/Products'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <PizzaBox />
        <BurgerBox />
        <Products/>
      </div>
    </Provider>
  )
}

export default App