import List from './List';

function ShoppingCart(props) {
    return(
        <div>
            <button 
                className="shoppingcart-button" 
                onClick={props.emptyCart}
            >
                Leeg Winkelmandje
            </button>

            <List 
                Items={props.Items} 
                handleClickGroceryItem={props.handleClickGroceryItem} 
            />
        </div>
        
    );
};

export default ShoppingCart;