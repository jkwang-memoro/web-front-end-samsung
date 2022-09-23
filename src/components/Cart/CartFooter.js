import CartTotal from './CartTotal';
import {useCart} from 'Context/Cart'

const CartFooter = ({ ...restProps }) => {
  const {total} =useCart();
  return (
    <footer {...restProps}>
      <CartTotal>{totalPrice}</CartTotal>
    </footer>
  )
};

export default CartFooter;
