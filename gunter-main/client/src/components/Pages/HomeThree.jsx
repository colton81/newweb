import React from 'react'
import Banner from '../HomeThree/Banner';
import Features from '../HomeThree/Features';
import SeperatedBar from '../HomeThree/SeperatedBar';
import About from '../HomeThree/About';
import Services from '../HomeThree/Services';
import Project from '../HomeThree/Project';
import Testimonials from '../HomeThree/Testimonials';
import PartnerLogo from '../HomeThree/PartnerLogo';
import Team from '../HomeThree/Team';
import Newsletter from '../HomeThree/Newsletter';
import LatestNews from '../HomeThree/LatestNews';
import Contact from '../HomeThree/Contact';
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