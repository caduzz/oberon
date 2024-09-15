import { createContext, ReactNode } from 'react'
import { timerProps } from '../@types/timer'
import useTimer from '../hooks/useTimer'

type TimerContextProps = {
  children: ReactNode
}

type TimerContextType = {
    timers: timerProps[],
    createTimer: (content: timerProps) => void,
    selectTimer: (name: string) => void,
    deleteTimer: (name: string) => void,
}

const initialValue = {
    timers: [],
    createTimer: () => {},
    selectTimer: () => {},
    deleteTimer: () => {},
} as TimerContextType


export const TimerContext = createContext<TimerContextType>(initialValue);

export const TimerContextProvider = ({ children }: TimerContextProps) => {
    const {createTimer, selectTimer, deleteTimer, timers} = useTimer()

    return (
        <TimerContext.Provider
            value={{ createTimer, selectTimer, timers, deleteTimer }}
        >
            {children}
        </TimerContext.Provider>
    ); 
}