import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                name:"Shariq"
            }
        

    }
  render() {
    
    return (
      <div>Class Component {this.state.name}</div>
    )
  }
}
