import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("#333333");

    const truClick = () => {
        setCount(count-1);
        changColor(count-1);
    }
    const congClick = () =>{
        setCount(count+1);
        changColor(count+1);
    }
    const changColor = (count) => {
        if(count==0){
            setColor("#333333");
        }else if(count<0){
            setColor("red");
        }else{
            setColor("green");
        }

    }
    return (
        <div class="main-container">
            <h1 className="title">Đếm số</h1>
            <h1 id="counter" style={{color: color}}>{count}</h1>
            <div>
                <button className="btn counterBtn prevBtn"
                        onClick={truClick}
                >Trừ</button>
                <button className="btn counterBtn nextBtn" onClick={congClick}
                >Cộng</button>
            </div>
        </div>
    );
}
export default Counter;