import React from "react";

class LifeCycleMethods extends React.Component{
    constructor(props){
    super(props);
    this.state={
        counter: 1
    };
    this.id = null;
}

componentDidMount(){
    console.log("Did Mount");
    // this.id = setInterval(()=> console.log("Set Interval",2000))
}

componentDidUpdate(){
    console.log("Did update");
}

componentWillUnmount(){
    console.log("Unmount");
    clearInterval(this.id);
}

handleClick = () => {
    this.setState({ counter: this.state.counter +1});
}

render(){
    return (
        <>
        <h1>Counter : {this.state.counter}</h1>
        <button onClick={this.handleClick}>Click me</button>
        </>
    )
}
}

export default LifeCycleMethods;