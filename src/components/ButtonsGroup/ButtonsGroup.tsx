import React, { FC, useState } from 'react';
import { TBtn } from "../../common/interfaces/interfaces";
import Button from "../controls/Button/Button";

type Props = {
    btns: TBtn[];
    cls?: string[],
    useCallback: (filterBy: TBtn['id']) => void,
}
type Component = FC<Props>;

const ButtonsGroup: Component = ({ btns, cls, useCallback }) => {
    const [activeBtn, setActiveBtn] = useState(btns[0].id);
    return (
        <div className="btn-group" role="group">
            { btns.map(({ id, title }) => (
                <Button
                    key={id}
                    title={title}
                    cls={ cls }
                    onClick={() => {
                        useCallback(id)
                        setActiveBtn(id);
                    }}
                    active={activeBtn === id}
                />
            ))}
        </div>
    );
};

export default ButtonsGroup;
