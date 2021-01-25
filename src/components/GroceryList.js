import List from './List';
import InputField from './InputField';

function GroceryList(props) {
    return (
        <div>
            <InputField 
                handleSubmit={props.handleSubmit} 
                handleChange={props.handleChange}
                value={props.inputFieldValue}
            />

            <List 
                Items={props.Items} 
                handleClickGroceryItem={props.handleClickGroceryItem} 
            />
        </div>
        
    );
};

export default GroceryList;