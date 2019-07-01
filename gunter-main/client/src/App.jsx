import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DefaultNavigation from './components/Navigation/DefaultNavigation';
import NavigationTwo from './components/Navigation/NavigationTwo';
import NavigationThree from './components/Navigation/NavigationThree';
import Preloader from './components/Common/Preloader';
import Home from './components/Pages/Home';
import HomeTwo from './components/Pages/HomeTwo';
import HomeThree from './components/Pages/HomeThree';
import ServiceDetails from './components/Pages/ServiceDetails';
import ProjectDetails from './components/Pages/ProjectDetails';
import BlogDetails from './components/Pages/BlogDetails';
import Blog from './components/Pages/Blog';
import MaterialNav from './components/Navigation/MaterialNav';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button } from '@material-ui/core';
import HeaderLinks from './components/Navigation/HeaderLinks';

const dashboardRoutes = [];


class App extends React.Component {
    
    state = {
        loading: true
    };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    renderNavBar = () => {
        const { classes, ...rest } = this.props;
        if (window.location.pathname === '/home-two'){
            return <NavigationTwo />
        }
        if (window.location.pathname === '/home-three'){
            return <NavigationThree />
        }

        return <MaterialNav color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
         />
    }
    render() {
        
        return (
            <Router>
                <React.Fragment>
                    {this.state.loading ? <Preloader /> : ''}
                    {this.renderNavBar()}
                    <Route path="/" exact component={Home} />
                    <Route path="/home-two" exact component={HomeTwo} />
                    <Route path="/home-three" exact component={HomeThree} />
                    <Route path="/service-details" exact component={ServiceDetails} />
                    <Route path="/project-details" exact component={ProjectDetails} />
                    <Route path="/blog-details" exact component={BlogDetails} />
                    <Route path="/blog" exact component={Blog} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
