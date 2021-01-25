function InputField(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                name="groceryInput" 
                onChange={props.handleChange}
                value={props.value} 
            />

            <button>Voeg Toe</button>
        </form>
            
    );
};

export default InputField;