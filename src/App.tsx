import { TimerContextProvider } from './contexts/timerContext'
import RuteApp from './routes'

import { GlobalStyle } from './styles/GlobalStyle'

export function App() {

  return (
    <TimerContextProvider>
      <GlobalStyle />
      <RuteApp />
    </TimerContextProvider>
  )
}