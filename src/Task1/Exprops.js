import * as React from 'react';
import ChildMethodProp from './ChildMethodProp';
export default class Exprops extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "method as prop"
        }
        this.getParamter = this.getParamter.bind(this);
    }

    getParamter(childName) {

        alert(`hello ${this.state.name} from ${childName}`)
    }

    render() {
        return (
            <div>
                <h1> {this.props.name}
                    {this.props.position}</h1>
                    <ChildMethodProp getHandler={this.getParamter} />
            </div>

        )
    }

}
