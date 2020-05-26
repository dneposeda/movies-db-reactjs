import React, {FC} from 'react';
import classNames from 'classnames';

interface ButtonProps {
    handleClick: () => void,
    title: string,
    cls?: string[],
    active?: boolean
}
type Component = FC<ButtonProps>;

const Btn: Component = ({ title , cls, active, handleClick}) => (
    <button
        type="button"
        className={ classNames(cls, { active: active }) }
        onClick={ () => handleClick() }
    >
        { title }
    </button>
)

export default Btn;
