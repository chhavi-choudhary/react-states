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
            <div>Counter:{this.state.counter}</div>
            <button onClick={ this.handleDecrement } >-</button>
            <button onClick={this.handleIncrement}>+</button>
            </>
        )
    }
}
export default Counter;
