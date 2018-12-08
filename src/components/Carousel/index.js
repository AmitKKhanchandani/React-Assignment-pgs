import React, { Component } from "react";
import { UncontrolledCarousel } from 'reactstrap';
import {connect} from 'react-redux';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


class ImageCarousel extends Component {


    constructor(props) {
        super(props);
        this.state = {
            img:[
                {
                    src: window.location.href + 'images/placeholder/select.png',
                    altText: 'Carousel',
                    caption: ''
                }
            ],
            images:[],
            activeIndex: 0
        }
    }

    componentDidMount() {
        console.log('Props', this.props);
        console.log('State', this.state);
    }
    

    componentWillReceiveProps(){
        this.goToIndex(0);
    }

    onExiting = () => {
        this.animating = true;
    }
    
    onExited = () => {
    this.animating = false;
    }
  
    next = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.props.dataReducer.images.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous = () => {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.props.dataReducer.images.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex= (newIndex) => {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
    

  render() {

    const slides = this.props.dataReducer.images.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} className="w-100" />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

    return (
      <div className="container">
        <div className="row">
        {(this.props.dataReducer.currentNumber == 0) &&

            <div className="col-md-8 offset-md-2">    
                <UncontrolledCarousel autoPlay={false} items={this.state.img} />
            </div>
        }
          {(this.props.dataReducer.currentNumber > 0) &&
                <div className="col-md-8 offset-md-2">    
                    <Carousel
                        activeIndex={this.state.activeIndex}
                        next={this.next}
                        previous={this.previous}
                        >
                        <CarouselIndicators items={this.props.dataReducer.images} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        dataReducer: state.dataReducer
    };
};

export default connect(mapStateToProps)(ImageCarousel);

