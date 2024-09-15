import { FC } from 'react';
import { Container } from './styles';

import disco from '../../../../../assets/icons/disco.png'

interface ICardLoading {
    msg: string
}

const CardLoading: FC<ICardLoading> = ({msg}) => {
    return (
        <Container>
            <div className='loadingArea'>
                <img src={disco} />
            </div>
            <div className='msg'>
                {msg}
            </div>
        </Container>
    );
};

export default CardLoading;
