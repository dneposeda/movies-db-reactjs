import React, {FC} from 'react';
import ImageLoader from 'react-imageloader';
import '../../images/spinner.svg';
import '../../images/no-img.png';

type Props = {
    src: string,
    title:string
}
type Component = FC<Props>;

const preloader = () => <img src="/images/spinner.svg"/>;

const Image: Component = ({ src, title }) => (
    <ImageLoader
        src={ src }
        wrapper={React.createFactory('div')}
        preloader={preloader}
        imgProps={{'alt': title, 'className': 'card-film__img'}}
        >
        <img src='/images/no-img.png' alt='no img' className="card-film__img"/>
    </ImageLoader>
)

export default Image;
