import React, { component } from 'react';
import { Document, Page } from 'react-pdf';

export default class Mountingnew extends React.Component {

  constructor(props) {
    console.log("this will printed constructor");
    super(props)
    this.state = {
      // name : "harish",
      //age : 0,
      a: 0
      //date: new Date()
    }
  }
  //static getDerivedStateFromProps(props, state) {
  // return{
  //name: props.name,
  //age : props.age
  //};
  //}

  componentDidMount() {
    console.log("this will printed didmount");
    this.timerId = setInterval(() => this.changeEvent(),
      1000
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("this will printed beforeupdate ");
    document.getElementById("div1").innerHTML =
      "Before the update, the a value was " + prevState.a;
  }
  shouldComponentUpdate() {
    console.log("this will printed shouldupdate");
    return true;
  }
  componentDidUpdate() {
    console.log("this will printed update ");
    document.getElementById("div2").innerHTML =
      "The updated a value is " + this.state.a;
  }


  componentWillUnmount() {
    console.log("this will printed unmount ");
    clearInterval(this.timerId);
  }

  changeEvent() {
    this.setState({
      // name: "bathu",
      // age : "19",
      //age : this.state.age+1,
      a: this.state.a + 5
      //date: new Date()
    })
  }

  render() {
    console.log("this will printed render ");
    return (
      <div>
        {/* <h1>{this.state.name}</h1> */}
        <h1>{this.state.a}</h1>
        <div id="div1"></div>


        <div id="div2"></div>
        {/* <h1>{this.state.age}</h1> */}


        {/* <h1>{this.state.date.toLocaleTimeString()}</h1> */}
        <button onClick={this.componentWillUnmount.bind(this)}>click me</button>
      </div>
    )
  }

}
