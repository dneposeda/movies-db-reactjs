import React, { FC } from 'react';
import Btn from "../controls/btn/Btn";

interface Props {
    readonly btnNames: string[];
}
type Component = FC<Props>;

const GropBtns: Component = ({ btnNames }) => (
        <div className="btn-group" role="group">
            { btnNames.map( (btnName: string, index: number) => <Btn title={ btnName } key={ index } />)}
        </div>
    )

export default GropBtns;
