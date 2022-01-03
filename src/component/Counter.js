import { Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: 0
        }
    }
    handleDecrement=()=>{
        this.setState({counter:this.state.counter -1})
    }
    handleIncrement=()=>{
        this.setState({counter:this.state.counter+1})
    }


    render(){
        return(
            <>
            <h2>Set a counter</h2>
            <div>Counter:{this.state.counter}</div>
            <button onClick={ this.handleDecrement } >- dectrement</button>
            <button onClick={this.handleIncrement}>+ increment</button>
            </>
        )
    }
}
export default Counter;
