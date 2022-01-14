import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './headerCartButton.module.css';
import CartContext from "../../store/cart-context";


const HeaderCartButton = props =>{
	const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
	const cartCtx = useContext(CartContext);
	const {items} = cartCtx;

	const numberOfcartItems = items.reduce((curNumber,item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnIsHighLighted ?  classes.bump : ''}`;

	useEffect(() => {
		if(items.length === 0){
			return;
		}
		setBtnIsHighLighted(true);

	 const timer = 	setTimeout(() => {
			setBtnIsHighLighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};

		},[items])

	return <button className={btnClasses} onClick={props.onClick}>
		<span className={classes.icon}>
		<CartIcon/>
		</span>
		<span>Your Cart</span>
		<span className={classes.badge}>{numberOfcartItems}</span>
	</button>

}

export default HeaderCartButton;