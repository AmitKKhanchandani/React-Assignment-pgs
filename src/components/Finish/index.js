import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {connect} from 'react-redux';

class Finish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  printNumberHitory = () =>{
    var text = '';
    var items = this.props.dataReducer.items;
    if(items == undefined) {
      return text;
    }
    var totallength = items.length - 1;
    items.forEach(function (item, index) {
        if(totallength != index){
            text += item + ', ';
        }
        else{
            text += item + '.';
        }
    });  
    return text;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          <div className="col-md-12 mt10">
          <div className="text-center">
              <Button color="danger" onClick={this.toggle}>
                Finish
              </Button>
            </div>
          </div>
            
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Carousel Selection History</ModalHeader>
          <ModalBody>
            {(!this.props.dataReducer.items || this.props.dataReducer.items.length > 0) &&
                <div>
                    Numbers selected: {this.printNumberHitory()}
                </div>
            }
            {(!this.props.dataReducer.items || this.props.dataReducer.items.length == 0) &&
                <div>
                    No History Found.
                </div>
            }
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        dataReducer: state.dataReducer
    };
};

export default connect(mapStateToProps)(Finish);
