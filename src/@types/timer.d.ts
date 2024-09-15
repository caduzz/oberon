export interface timerProps {
    name: string,
    working: number,
    rest: number,
    selected: boolean,
}

export interface timerStates {
    currentTime: number,
    isTimerRunning: boolean
}
  
  