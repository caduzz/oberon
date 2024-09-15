import { useState, useEffect, FC } from 'react';

import { ContainerSvg } from './style';
import { secondsConvertForMinutes } from '../../utils/timerComvert';

interface CircularProgressBarProps {
  porcentagem: number;
  time: number;
  strokeWidth?: number;
  initialTime?: number;
  size?: number;
  color?: string;
  textColor?: string;
  textSize?: string;
}

const CircularProgressBar: FC<CircularProgressBarProps> = ({
  porcentagem,
  time,
  strokeWidth = 10,
  size = 100,
  color = '#f49',
  textColor = '#f49',
  textSize = '1rem',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState<string>('0');

  // Atualiza o deslocamento (offset) com base na porcentagem
  useEffect(() => {
    const offsetValue = circumference - porcentagem * circumference;
    setOffset(`${offsetValue}`);
  }, [porcentagem, circumference]);

  return (
    <ContainerSvg fontSize={textSize} fontColor={textColor}>
      <svg width={size} height={size}>
        {/* Círculo de fundo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
          stroke="#333"
          strokeDasharray={circumference}
          strokeDashoffset={0}
          className="totalBar"
        />
        {/* Círculo de progresso */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <h2>{secondsConvertForMinutes(time)}</h2>
    </ContainerSvg>
  );
};

export default CircularProgressBar;