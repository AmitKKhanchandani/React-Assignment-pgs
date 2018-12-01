import React, { Component } from "react";
import {connect} from 'react-redux';
import Store from '../../utils/store';

class NumberSelector extends Component {

    constructor(props){
        super(props);


        // Bindings
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(e){
        e.preventDefault();
        var value = (e.target.value);
        Store.store.dispatch({
            type: 'CURRENT_ITEM',
            payload: {
                number: value
            }
        });
        if(value > 0 ){
            Store.store.dispatch({
                type: 'ADD_ITEM',
                payload: {
                    number: value
                }
            });
        }

    }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-2">
            <div className="form-group mt10">
              <label htmlFor="carousel">Select Number For Carousel:</label>
              <select className="form-control" id="carousel" onChange={this.onSelectChange}>
                <option value="0">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log('number selector', state);
    return state;
}

export default connect(mapStateToProps)(NumberSelector);
