import BackToTop from 'components/BackToTop';
import ScrollToTop from 'components/ScrollTop';
import Layout from 'container/Layout';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import WorkDetails from 'pages/WorkDetails';
import Works from 'pages/Works';
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NotFound from 'pages/NotFound';

const App = () => {



  return (
    <>
    <Router>
  
      <Layout>
      <ScrollToTop/>
        <BackToTop/>
      <Switch>
       
        
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} exact/>
      <Route path="/work" component={Works} exact/>
      <Route path="/work/:slug" component={WorkDetails} exact/>
      <Route path="/contact" component={Contact} exact/>
      <Route component={NotFound} />
      </Switch>
      </Layout>


    </Router>
      
    </>
  )
}

export default App
