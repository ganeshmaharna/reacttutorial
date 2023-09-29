import React, { PureComponent } from "react";

export default class Pcomponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 10,
    };
  }
  incrementUserCount = () => {
    // this.setState({
    //     userCount:this.state.userCount+1
    // })
    this.setState(() => {
      return {
        userCount: this.state.userCount + 1,
      };
    });
  };
//   The PureComponent only implements the shoundComponentUpdate method nothing more nothing less
//   shouldComponentUpdate(newState, newProps) {
//     if (newState.userCount !== this.state.userCount) {
//       return true;
//     }
//     return false;
//   }
  render() {
    console.log("The pure component renders");
    return (
      <>
        <div>Pcomponent {this.state.userCount}</div>
        <button onClick={this.incrementUserCount}>Incr</button>
      </>
    );
  }
}
