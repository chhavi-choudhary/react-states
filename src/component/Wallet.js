
import {Component} from 'react';
class Wallet extends Component{
    constructor(props){
        super(props);
        this.state={
            password:'sss',
            credit:0
        }
    }
setPassWord=(pass)=>{
    this.setState({password:pass});
}
 topUp=(userCredit)=>{
     this.setState({credit:this.state.credit+userCredit})
 }

    render(){
        return(
            <>
          <div>
              <h2>lets set the password</h2>
          Password:{this.state.password}
          </div>
          <div>NewPassword:</div>
          <button onClick={()=>this.setPassWord('abc')}>Update password</button>
          <h2>Current Credit:{this.state.credit}</h2>
          <button onClick={()=>this.topUp(400)}>Credit after User Contribution</button>
          </>
          
        )
    }
}
export default Wallet;