import React, { FC, useState } from 'react';
import { TBtn } from "../../common/interfaces/interfaces";
import { TypeSearch, TypeSort } from "../../common/enum/enum";
import Button from "../controls/Button/Button";

type Props = {
    btns: TBtn[];
    cls?: string[],
    useCallback: (filterBy: TBtn['id']) => void,
    defaultActiveButton?: TypeSort | TypeSearch,
}
type Component = FC<Props>;

const ButtonsGroup: Component = ({ btns, cls, useCallback, defaultActiveButton = btns[0].id }) => {
    const [activeBtn, setActiveBtn] = useState(defaultActiveButton);

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
