import React from 'react';

class Task1 extends React.Component {
    state = {
        //details : [
        // {name : 'harish', ph : '896545667'},
        // {name : 'bharath', ph : '56776778'},
        // {name : 'zak', ph : '3456677'},
        // {name : 'sai', ph : '567898767'}
        //],
        name: ["Harish", "bharath", "Zak", "peter", "hulk", "sai"],
        phnum: ["12345", "85678", "1556758", "16546", "231546", "42454", "12464"]

    };


    render() {
        //     console.log(this.state);

        //for (var i = 0; i < this.state.name.length; i++) {
        //for (var j = 0; j < this.state.phnum.length; j++) {
        //if (this.state.name[i] === this.state.phnum[j]) {
        return (
            <div>
                {this.state.name}
                <br />
                {this.state.phnum}
                <br />
                <table>
                    <tr>
                        <th>names</th>
                        <th>nums</th>

                    </tr>
                    <tr>
                        <td>
                            <ul>
                                {this.state.name.map(x => {
                                    return <li >{x}</li>;
                                })}
                            </ul>
                        </td>
                        <td>

                            <ul>
                                {this.state.phnum.map(x => {
                                    return <li >{x}</li>;
                                })}
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        )



        // }
        // }
        //  }
    }
}
export default Task1;