import React from 'react'
import Banner from '../HomeDefault/Banner';
import Features from '../HomeDefault/Features';
import SeperatedBar from '../Common/SeperatedBar';
import About from '../HomeDefault/About';
import Services from '../HomeDefault/Services';
import Project from '../HomeDefault/Project';




import Facebook from '../Common/Facebook'
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import Parallax1 from '../HomeDefault/Parallax';
 
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
                {/* Feedback Area 
                <Testimonials /> */}
                <Parallax1 />
                {/* Partner Area 
                <PartnerLogo /> */}
                <SeperatedBar />
                {/* Team Area 
                <Team /> */}
                <Facebook style={{width: "100%", height: "100%"}} />
                {/* Subscribe Area 
                <Newsletter /> */}
                {/* Blog Area 
                <LatestNews /> */}
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