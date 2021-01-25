import ShoppingCart from './components/ShoppingCart';
import GroceryList from './components/GroceryList';
import React from 'react';

class Container extends React.Component {
    constructor() {
        super();

        this.state = {
            groceryItems: [
                { id: 1, title: "Arla Halfvolle Melk"},
                { id: 2, title: "Bolletje Volkoren Crackers"},
                { id: 3, title: "Quacker Havermout"},
            ],

            shoppingListItems: [
                { id: 1, title: "Krat Hertog Jan", amount: 1},
                { id: 2, title: "Fles Vieux", amount: 1},
                { id: 3, title: "Bolletje Volkoren Crackers", amount: 1},
            ],

            inputFieldValue: "",
        };

        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addAmountToItem = this.addAmountToItem.bind(this);
    };

    async handleClickGroceryItem(e) {
        const title = e.target.innerText;

        const shoppingListItems = this.state.shoppingListItems;

        const findItem = shoppingListItems.some((item) => {
            return item.title === title;
        });

        if(!findItem) {
            await this.setState((prevState) => {
                const id = prevState.shoppingListItems.length + 1;
    
                return {
                    shoppingListItems: [
                        ...prevState.shoppingListItems,
                        { id: id, title: title, amount: 1}
                    ]
                };
            });
        } else {
            this.addAmountToItem(title);
        }
    };

    addAmountToItem(title) {
        const prevState = this.state.shoppingListItems;

        const updatedState = prevState.map((item) => {
            if (item.title === title) {
                item.amount = item.amount + 1;
            };

            return item;
        });

        this.setState({shoppingListItems: updatedState})
    };

    async emptyCart() {
        await this.setState({ shoppingListItems: [] });
    };

    async handleSubmit(event) {
        await event.preventDefault();

        await this.setState((prevState) => {
            const id = prevState.groceryItems.length + 1;
            const title = this.state.inputFieldValue;

            return {
                groceryItems: [
                    ...prevState.groceryItems,
                    { id: id, title: title}
                ]
            };
        });

        this.setState({ inputFieldValue: ''});
    };

    handleChange( event ) {
        const value = event.target.value;

        this.setState({ inputFieldValue: value});
    };

    render() {
        return(
            <div className="container">
                <div className="boodschappenlijst">
                    <h2>Boodschappenlijst</h2>
                    <GroceryList 
                        Items={this.state.groceryItems}
                        handleClickGroceryItem={this.handleClickGroceryItem}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        inputFieldValue={this.state.inputFieldValue}
                    />
                </div>
                
                <div className="winkelmandje">
                    <h2>Winkelmandje</h2>
                    <ShoppingCart 
                        Items={this.state.shoppingListItems} 
                        emptyCart={this.emptyCart}
                    />
                </div>
            </div>
        );
    };
};

export default Container;