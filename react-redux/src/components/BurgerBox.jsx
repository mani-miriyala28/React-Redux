import { orderBurger } from "./redux/BurgerBox/BurgerActions"
import { connect } from "react-redux"

const BurgerBox=(props)=>{
    return(
        <div className="bg-[#f9f9f9] p-5 rounded-xl max-w-100 m-auto text-center shadow-lg flex flex-col gap-2">
            <div className=''>
                Burgers Available: {props.burgerBuns}
            </div>
            <p className='bg-[#70005d] border-none py-[10px] px-[20px] rounded-lg text-white cursor-pointer' onClick={props.orderBurger}>
                Order Burger
            </p>
        </div>
    )

}
const mapStateToProps=(state)=>{
    return {
        burgerBuns: state.burger.burgerBuns
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        orderBurger:()=>dispatch(orderBurger())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);