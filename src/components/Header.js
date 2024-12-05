import {Component} from 'react'
import {useState,useEffect} from 'react'
import Counter from './Counter';

class Header extends Component {
    render(){
        return(
            <div>
                <h2>Show all Of this</h2>
            </div>
        )
    }
   
}
export {Header};



function Name () {
    const [count,setCount] = useState(0)
    useEffect(()=> {
        console.log("its me useEffect" +count);
        return (
          console.log('Its second useeffect')
        )
        
      },[count])
    
    const onCount=() => {
        setCount( count +1)
    }
    const outCount=() => {
        setCount( count -1)
    }
    return (
        <div>
            <Counter title= '1st count' count = {count} />
            <Counter title= '2nd count' count = {count} />
            <button onClick={onCount}>+</button>
            <button onClick={outCount}>-</button>
        </div>
    )
}
export {Name};