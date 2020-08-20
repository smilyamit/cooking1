import React, {Component} from 'react';
import {ThemeContext} from './App'

export default class Counter extends Component {
   constructor(props){
     super(props)

     this.state = {
       count: props.initialCount
     }
   } 

   render(){
    console.log(" Counter")
       return (
         <ThemeContext.Consumer>
           {style => (
          <div>
          <button style ={style} onClick ={() => this.changeCount(-1)} >-</button>    
          <span>{this.state.count}</span>
          <button style = {style} onClick = {() => this.changeCount(1)} >+</button>
       </div>
           )}

         </ThemeContext.Consumer>

       )
   }

   changeCount(amount){
    //  this.setState({ count: this.state.count + amount }) // this is easy but old method where if u repeat the code nothing happens. This is not fun version
       this.setState( prevState => {
         return { count: prevState.count + amount}
       })             // if u just copy above 2 line of code and paste down there, count rate will be doubled, this is fun version


   }
}