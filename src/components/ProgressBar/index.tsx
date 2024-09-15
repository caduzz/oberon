import { useState, useEffect, FC } from 'react';
import { Bar } from './style';

interface CircularProgressBarProps {
  porcentagem: number;
  total: number
}

const ProgressBar: FC<CircularProgressBarProps> = ({
  porcentagem,
  total
}) => {
  const [progress, setProgress] = useState<number>(0)
  useEffect(() => {
    const calcProgress = (porcentagem / total) * 100;
    setProgress(calcProgress);
  }, [porcentagem]);

  return (
    <Bar width={progress}>
      <div className='progress'></div>
    </Bar>
  );
};

export default ProgressBar;