import React, { Component } from 'react'

export class Refs extends Component {
constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setcbRef=(element)=>{
this.cbRef=element
    }
}
componentDidMount(){
    if(this.cbRef){
        this.cbRef.focus()
    }
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
}

hanlerChange=()=>{
    alert(this.inputRef.current.value)
}

    render() {
        return (
            <div>
                <input type="text" ref= {this.inputRef}/>
                <input type="text" ref= {this.setcbRef}/>
                <button onClick={this.hanlerChange}>Click</button>
            </div>
        )
    }
}

export default Refs
