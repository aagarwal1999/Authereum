import React, { Component } from 'react';
import logo from './logo.png';
import image from './image.png';
import './App.css';
import {greeterContract, web3} from './EthereumSetup';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          value :""
      }
  }

  componentWillMount() {
      var data = greeterContract.getValue()
      this.setState ({
          value: String(data)
      })
  }

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Authereum</h2>
        </div>
        <p className="App-intro">
            Current Certs: Oracle Java Programmer | Blockchain Developer | Oracle Python Developer
        </p>
        <p>Name : Saharsh Agrawal</p>
        <p className="App-intro">
            Your account is: {web3.eth.accounts[0]}
        </p>
        <p className="App-intro">
           Choose Certificate to verify: {this.state.value}
        </p>
        <div>
            <table className = "table">
                <td>Issuer
                    <tr><button type="button">Generate Certification</button></tr>
                </td>
                <td>User
                    <tr><button type="button">Request Verification</button></tr>
                </td>
                <td>3rd Party Company
                    <tr><button type="button">Retrieve Certifcation</button></tr>
                </td>
   
            </table>
            <table className = "table"><tr><img src={image} className="App-image" alt="image" width="600" /></tr></table>
        </div>
        
        
                
      </div>
    );
  }
}

export default App;
