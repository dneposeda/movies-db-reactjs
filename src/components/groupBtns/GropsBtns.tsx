import React, {FC, useState} from 'react';
import Btn from "../controls/btn/Btn";
import {TBtn} from "../../interfaces/interfaces";

interface Props {
    btns: TBtn[];
    cls?: string[],
    onClick: (filterBy: TBtn['id']) => void,
}
type Component = FC<Props>;

const GropBtns: Component = ({ btns, cls, onClick }) => {
    const [activeBtn, setActiveBtn] = useState(btns[0].id);
    return (
        <div className="btn-group" role="group">
            { btns.map(({ id, title }) => (
                <Btn
                    key={id}
                    title={title}
                    cls={ cls }
                    onClick={() => {
                        onClick(id)
                        setActiveBtn(id);
                    }}
                    active={activeBtn === id}
                />
            ))}
        </div>
    );
};


export default GropBtns;
