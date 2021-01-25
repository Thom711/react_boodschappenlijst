import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    constructor(props) {
        super();

        this.state = {
            groceryItems : props.Items,
        };

        this.handleClickGroceryItem = props.handleClickGroceryItem;
    };

    static getDerivedStateFromProps(props, state) {
        if (props.Items !== state.groceryItems) {
            return {
                groceryItems: props.Items
            };
        };

        return null;
    };

    render() {
        const groceryItems = this.state.groceryItems;

        const mappedGroceryItems = groceryItems.map((item) => {
            return <ListItem 
                key={item.id} 
                title={item.title}
                amount={item.amount}
                handleClickGroceryItem={this.handleClickGroceryItem}
                />
        })

        return (
            <div>
                <ul className="list">
                    {mappedGroceryItems}
                </ul>
            </div>
        );
    };
};

export default List;