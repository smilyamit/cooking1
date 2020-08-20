import React, {useState, useContext} from 'react'
import {ThemeContext} from './App.js'

export default function CounterHooks({initialCount}) {
       console.log('Render Counter Hooks')   

       const [count, setCount] = useState(initialCount)    // useState is working as this.state, instead of using an object eg {}, here we are using as a single value, make sure order is maintained
       const style = useContext(ThemeContext)        // same like useState hook useContext hook have to use on top
         return (
            <div>
                <button style ={style} onClick = {() => setCount( prevCount => prevCount -1 )}>-</button>
                <span>{count}</span>
                <button style = {style} onClick = {() => setCount(prevCount => prevCount +1)} >+</button>
            </div>
         )
}