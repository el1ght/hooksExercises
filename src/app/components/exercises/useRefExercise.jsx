import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const divRef = useRef();
    const [smallText, setSmallText] = useState("Блок");
    const handleClick = () => {
        console.log(divRef.current.clientWidth);
        setSmallText("text");
        divRef.current.style.height = "150px";
        divRef.current.style.width = "80px";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={divRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{smallText}</small>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Изменить свойства
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
