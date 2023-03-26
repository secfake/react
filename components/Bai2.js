import React,{useState} from "react";
import "./bai2.css"
function Bai2() {  
   
    const [colorBoxs, setColorBox] = useState([
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400',
    ]);
    // const [inputValue, setInputValue] = useState('');
    // const [isShow, setShow] = useState(true);

    function addBoxs() {
        setColorBox([...colorBoxs,'#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400',]);
    }
    // function showList() {
    //     setShow(!isShow);
    // }

    // const handleInputChange = (event) => {
    //     setInputValue(event.target.value);
    // }

    function removeBox(index) {
        // setColorBox((colorBoxs) => {
        //     const newBoxes = [...colorBoxs];
        //     newBoxes.splice(index, 1);
        //     return newBoxes;
        //   });
        const newBoxes = [...colorBoxs];
        newBoxes.splice(index, 1);
        setColorBox([...newBoxes]);
    }
    function Box({ color, onClick }) {
        return (
          <div className="box" style={{ backgroundColor: color }} onClick={onClick} />
        );
      }

    return (
        <div class="wrap">
        <h1> JS DOM</h1>
        <button id="btn" onClick={addBoxs}>More boxes</button>
        <h4 id="score"> Total box: <span class="points">{colorBoxs.length}</span></h4>

        <div className="boxes">
           {
            colorBoxs.map((colorBox, index) => <Box key={index} color={colorBox} onClick={() => removeBox(index)} />)
            }
        </div>
        </div>
    )
}

export default Bai2;