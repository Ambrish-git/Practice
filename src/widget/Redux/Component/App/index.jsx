import React, { Component } from 'react';
import { connect } from 'react-redux';

import Add from '../Add/index';

class Counter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {data,counter}=this.props;
    console.log(data);
    return (
      <div className="cotainer">
        <div className="notification">
          <h1>
          {counter}
          </h1>
        </div>
        <div>{data.map(u=><p key={u.id}>{u.name}</p>)}

        </div>
        <Add />
    </div>
    )
  }
}
function mapStateToProps(state){
  return {
    ...state.counterReducer,
  };
}
export default connect(mapStateToProps)(Counter);