function ListItem(props) {
    return (
        <li 
            className="list-item" 
            onClick={props.handleClickGroceryItem
        }>
            <p>{props.title}</p>
            {props.amount ? <p>Hoeveelheid: {props.amount} </p> : ''}
        </li>
    );  
};

export default ListItem;