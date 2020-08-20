import React, {useState} from 'react';
import Counter from './Counter.js';
import CounterHooks from './CounterHooks.js'

export const ThemeContext = React.createContext()    // it is having 2 parts providder and consumer

function App() {
  console.log(" Render APP")
  const [theme, setTheme] = useState('Red')
  return (
    <ThemeContext.Provider value = {{ backgroundColor: theme}} >             
    Counter
  < Counter initialCount= {0} />
    CounterHooks
  < CounterHooks initialCount = {0} />

  <button onClick = {() => setTheme(prevTheme => {
    return prevTheme === 'red' ? 'blue':'red'} )} >Toggle Theme</button>

  </ThemeContext.Provider>
  )


}

export default App;
