import { Button } from '@material-ui/core'
import { CartItemtype } from '../../App'
import {Wrapper} from './CartItem.styles'

type Props = {
    item: CartItemtype;
    addToCart: (clickedItem: CartItemtype) => void
    removeFromCart: (id: number) => void
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className='info'>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className='buttons'>
                    <Button size="small"
                            disableElevation
                            variant='contained'
                            onClick={() => addToCart(item)} >
                        +
                    </Button>
                    <p> {item.amount} </p>
                    <Button size="small"
                            disableElevation
                            variant='contained'
                            onClick={() => removeFromCart(item.id)} >
                        -
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} />
        </Wrapper>
    )
}

export default CartItem