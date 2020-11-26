import React from 'react'


export default class Demo1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false
    }
    // this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick = (even) => {
    console.log(even, 123)
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handlerClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
          {this.props.name}
        </button>
      </div>
    );
  }
}