import React, {FC} from 'react';
import classNames from 'classnames';

interface ButtonProps {
    handleClick: () => void,
    title: string,
    cls?: string[],
    active?: boolean,
    onClick?: () => void,
}
type Component = FC<ButtonProps>;

const Btn: Component = ({ title , cls, active, handleClick, onClick}) => (
    <button
        type="button"
        className={ classNames(cls, { active: active }) }
        onClick={ () => {
            handleClick();
            onClick();
        }}
    >
        { title }
    </button>
)

export default Btn;
