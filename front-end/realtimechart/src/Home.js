import React from 'react'
import "./home.scss";
import { RealTimeChart } from './RealTimeChart';
import axios from 'axios';

// const handleClick = (e) => {
//   e.preventDefault();
//   const userData = this.state;
//   axios.get("https://jsonplaceholder.typicode.com/users", userData).then(response => {
//     console.log(response.status);
//     console.log(this.state)
//     // console.log(response.log.token);
//   })
// }

// function handleClick(){
//   const userData = {
//     number: 2
//   };
//   axios.get("https://jsonplaceholder.typicode.com/longnd1009", userData).then(response => {
//     console.log(response.status);
//     console.log(response.log.token);
//   })
// }
// const handleInputChange = (e) => {
//   console.log(e.target.value);
  // this.state = {number: e.target.value}
// }


class Home extends React.Component {
  handleInputChange = (e) => {
    this.state = {number: e.target.value};
    console.log(this.state.number);}

  handleClick = (e) => {
      e.preventDefault();
      const userData = this.state;
      axios.get("https://jsonplaceholder.typicode.com/users", userData).then(response => {
        console.log(response.status);
        console.log(this.state)
        // console.log(response.log.token);
      })
    }
  render() {
    return (
      <div className="home">
        <div className="Chart">
          <RealTimeChart />
        </div>
        <div className="modify-numbers-of-light">

          <input className="item-quantity" 
            onChange={this.handleInputChange}
            type="number"
            min="-40"
            max="40"
          // value={quantity}
          // onChange={handleNumberInputChange}
          />
          <button
            className="button-update"
            onClick={this.handleClick}
          >
            Update</button>
        </div>
      </div>
    )
  }
}

export default Home;
