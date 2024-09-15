import { AnchorHTMLAttributes, FC } from 'react';
import { Container } from './styles';
import { timerProps } from '../../../../@types/timer';
import { limitarString } from '../../../../utils/stringConvert';

import { BiTrash } from 'react-icons/bi'

interface TimerBtnProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  data: timerProps
  onDelete: () => void
}

const TimerBtn: FC<TimerBtnProps> = ({ data, onDelete, ...rest }) => {
  return (
    <Container selected={data.selected}>
      <div className='btn'>
        <a className='timer-btn' {...rest}>
          <h2>{limitarString(data.name, 20)}</h2>
          <div className='timers'>
            <p>Working: {data.working} min</p>
            <p>Rest: {data.rest} min</p>
          </div>
        </a>
        <a className='delete' onClick={onDelete}>
          <BiTrash size={12} />
        </a>
      </div>
    </Container>
  );
};

export default TimerBtn;
