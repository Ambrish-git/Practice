import React, { Component } from 'react';

class AddCounter extends Component {
  constructor(props) {
        super(props);
      }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                    onClick={(e) => {e.preventDefault();this.props.addCounter()}}>
                      Add
                   </button>
                </div>
                <div className="control">
                  <button className="button is-primary" 
                    onClick={(e) => {e.preventDefault();this.props.getData()}}>
                      get data
                   </button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}

export default (AddCounter);