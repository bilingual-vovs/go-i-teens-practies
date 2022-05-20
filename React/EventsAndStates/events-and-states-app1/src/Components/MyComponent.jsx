import React, {Component} from "react";
import ReactDOM from 'react-dom'
class MyClassComponent extends Component{
    static defaultProps = {}
    static propTypes = {}

    reander(){
        return <div>ClassComponent <button onClick={event => console.log(event)}>Click me!</button></div>
    }
}

ReactDOM.render(<MyClassComponent/>, document.getElementById('root'));
export default MyClassComponent