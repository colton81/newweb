import React from 'react'
import Banner from '../HomeTwo/Banner';
import Features from '../HomeTwo/Features';
import SeperatedBar from '../HomeTwo/SeperatedBar';
import About from '../HomeTwo/About';
import Services from '../HomeTwo/Services';
import Project from '../HomeTwo/Project';
import Testimonials from '../HomeTwo/Testimonials';
import PartnerLogo from '../HomeTwo/PartnerLogo';
import Team from '../HomeTwo/Team';
import Newsletter from '../HomeTwo/Newsletter';
import LatestNews from '../HomeTwo/LatestNews';
import Contact from '../HomeTwo/Contact';
import Footer from '../Common/Footer';
 
class Home extends React.Component {
    render(){
        return (
            <React.Fragment>
                {/* Main Banner */}
                <Banner />
                {/* Features Area */}
                <Features />
                {/* Vertical line */}
                <SeperatedBar />
                {/* About Area */}
                <About />
                {/* Vertical line */}
                <SeperatedBar />
                {/* Services Area */}
                <Services />
                {/* Vertical line */}
                <SeperatedBar />
                {/* Project Area */}
                <Project />
                {/* Vertical line */}
                <SeperatedBar />
                {/* Feedback Area */}
                <Testimonials />
                {/* Partner Area */}
                <PartnerLogo />
                {/* Team Area */}
                <Team />
                {/* Subscribe Area */}
                <Newsletter />
                {/* Blog Area */}
                <LatestNews />
                {/* Vertical line */}
                <SeperatedBar />
                {/* Contact Area */}
                <Contact />
                {/* Footer Area */}
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Home;