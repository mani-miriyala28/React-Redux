import { orderPizza } from "./redux/Pizza/pizzaActions"
import { connect } from "react-redux"

const PizzaBox=(props)=>{
    return(
        <div className="bg-[#f9f9f9] p-5 rounded-xl max-w-100 m-auto text-center shadow-lg flex flex-col gap-2">
        <div className=''>
Pizzas Available:{props.pizzaBase}
        </div>
        <div className='bg-[#70005d] border-none py-[10px] px-[20px] rounded-lg text-white cursor-pointer' onClick={props.orderPizza}>
          Order Pizza
        </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        pizzaBase:state.pizzaBase
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        orderPizza:()=>dispatch(orderPizza())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox);
