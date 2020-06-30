import React, {FC} from 'react';
import classNames from 'classnames';

interface ButtonProps {
    title: string,
    cls?: string[],
    active?: boolean,
    onClick?: () => void,
}
type Component = FC<ButtonProps>;

const Btn: Component = ({ title , cls, active, onClick}) => (
    <button
        type="button"
        className={ classNames(cls, { active: active }) }
        onClick={ onClick }
    >
        { title }
    </button>
)

export default Btn;
