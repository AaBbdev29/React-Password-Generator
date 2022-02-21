import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './App.css'
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: "", genPass: '', length:8,copyValue:'Copied Successfully!',copied:false
    }
  }
  handleCheck = (e) => {
    if (e.target.checked) {
      const value = e.target.value;
      const preState = this.state.temp;
      const values = [value, [preState]];
      this.setState({ temp: values.join('') });
      console.log(values);

    } else {
      return null;
    }
  }
  passwordGenerator = (e) => {
    e.preventDefault();
    let temp = this.state.temp;
    let element = [];
    for (let index = 0; index < this.state.length; index++) {
      element = temp[Math.floor(Math.random() * temp.length)] + element;
      console.log(element);
    }
    this.setState({ genPass: element })
  }
  lengthHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    this.setState({ length: value })
  }
  copyHandler=(e)=>{
    e.preventDefault();
    this.setState({copied:true})
  }
  handleUpperCase=(e)=>{
        e.preventDefault();
        const toUpperCase=this.state.genPass.toUpperCase();
        this.setState({genPass:toUpperCase})
  }
  render() {
    return (
      <div className="App">
        <h1 className="header">Password Generator</h1>
        <form className="form" onSubmit={this.passwordGenerator} >
          <hr />
          <h5>Choose any or all of checkboxes and click on Password Generator!! </h5>
          <label className="label_char"><input type="Checkbox" id="chars" onChange={this.handleCheck} value="abcdefghijklmnopqrstuwxyz"/>Letters</label>
          <br />
          <label><input type="Checkbox" id="Numbers" onChange={this.handleCheck} value="1234567890" />Numbers</label>
          <br />
          <label className="label_spChar"><input type="Checkbox" id="Symbols" onChange={this.handleCheck} value="!@#$%^*()" />Special Characters</label>
          <br />
          <label>
            Choose Lenght:
            <select defaultValue={this.state.length} onChange={this.lengthHandler}>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
              <option >5</option>
              <option >6</option>
              <option >7</option>
              <option >8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Genrate Password" className="button" />
          <hr />
          <input type="text" id="result" className="result" value={this.state.genPass}/>
          {/* <button className="buttonCopy" onClick={e=>{e.preventDefault()}}>Copy</button> */}
          {/* <CopyToClipboard text={this.state.copyValue}
          onCopy={() => this.setState({copied: true})}>
          <button className="buttonCopy" onClick={e=>{e.preventDefault()}}>Copy</button>
           </CopyToClipboard> */}
           <CopyToClipboard text={this.state.genPass}>
            <React.Fragment>
            <button onClick={this.copyHandler} className="buttonCopy">Copy to clipboard</button>
            {this.state.copied ?<span>{this.state.copyValue}</span>:null}
            </React.Fragment>
            </CopyToClipboard>
            <button className="buttonUpper" onClick={this.handleUpperCase}>To Upper Case</button>
        </form>
      </div>
    )
  }
}

export default App
