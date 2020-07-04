import React, {FC} from 'react';
import classNames from 'classnames';

type ButtonProps = {
    title: string,
    cls?: string[],
    active?: boolean,
    onClick?: () => void,
}
type Component = FC<ButtonProps>;

const Button: Component = ({ title , cls, active, onClick}) => (
    <button
        type="button"
        className={ classNames(cls, { active: active }) }
        onClick={ onClick }
    >
        { title }
    </button>
)

export default Button;
