import React,{useState} from "react";

function Bai1() {

    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [inputValue, setInputValue] = useState('');
    const [isShow, setShow] = useState(true);

    function getList() {
        setItems([...items,inputValue]);
        setInputValue('');
    }

    function showList() {
        setShow(!isShow);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    function remove() {
        const newList = [...items];
        newList.pop();
        setItems(newList);
    }
 
    return (
        <div>
            <input value={inputValue} onChange={handleInputChange}/>
            <button onClick={getList}>Add</button>
            <button onClick={remove}>Remove</button>
            <button onClick={showList}>{isShow ? 'Hide' : 'Show'}</button>
            {isShow ? 
            <ul>
                { items.map((item) => <li>{item}</li>)}

            </ul> : null}
        </div>
    )
}

export default Bai1;