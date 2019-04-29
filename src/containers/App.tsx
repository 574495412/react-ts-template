import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import '../assets/less/common.less';
export interface Props{
  location:any;
}
class App extends Component<Props> {
  render() {
    const {location} = this.props;
    console.log(location)
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Link to="/Hello/test">1</Link>
      </div>
    );
  }
}

export default App; 