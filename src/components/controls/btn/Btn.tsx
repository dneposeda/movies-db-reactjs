import React, { FC } from 'react';
import classNames from 'classnames';

//

interface ButtonProps {
    readonly title: string,
}
type Component = FC<ButtonProps>;

const Btn: Component = ({ title }) => {

    // start temp
    const classes = classNames(
        'btn',
        'filter-sort__btn',
        {
            ['active']: title === 'title' || title === 'release date',
        },
    );
    // end temp

    return (
        <button
            type="button"
            className={ classes }
        >
            { title }
        </button>
    )
}

export default Btn;
