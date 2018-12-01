import React, { Component } from 'react';
import Login from '../../components/Login';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import NumberSelector from '../../components/NumberSelector';
import ImageCarousel from '../../components/Carousel';
import Finish from '../../components/Finish';


class Home extends Component {
    render() {
        return (
            <div>
                {/* <Login /> */}
                <Header />
                <NumberSelector/>
                <ImageCarousel />
                <Finish />
                <Footer />
            </div>
        );
    }
}

export default Home;