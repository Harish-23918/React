import React from 'react';

class Mount extends React.Component{

constructor(props){
    super(props)
    this.state = {
        name : "harish",
        age : "24"
    }
}
//static getDerivedStateFromProps(props, state) {
   // return{
        //name: props.name,
        //age : props.age
    //};
//}

componentDidMount() {
    setTimeout(() => {
      this.setState({
          name: "bathu",
          age : "19"
        })
    }, 1000)
  }

render(){
    return(
        <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
        </div>
    )
}

}
export default Mount;
