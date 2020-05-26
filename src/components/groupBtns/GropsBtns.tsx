import React, {FC, useContext} from 'react';
import Btn from "../controls/btn/Btn";
import {IBtn} from "../../interfaces/interfaces";
import Context from "../../context";

interface Props {
    btns: IBtn[];
    cls?: string[],
    group?: string,
}
type Component = FC<Props>;

const GropBtns: Component = ({ btns, cls, group }) => {
    const { handleClickBtn } = useContext(Context);

    return (
        <div className="btn-group" role="group">
            { btns.map( ( { id, title, active } ) => (
                <Btn
                    key={ id }
                    title={ title }
                    cls={ cls }
                    handleClick={ () => handleClickBtn(id, group) }
                    active={ active }
                />
            ))}
        </div>
    )
}

export default GropBtns;
