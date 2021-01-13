import React, { Component } from "react";
import Gallery from "./Gallery";
import Studios from "./Studios";
import Staff from "./Staff";
import Footer from "./Footer";
import Home from "./Home";
import Contact from './Contact';
import About from './About';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";





class Main extends Component {

   render() {
      

      return (
         <div>
            <Header />
            <Switch>
               <Route path="/home" component={Home} />
               {" "}
               <Route path="/aboutus" component={About} />
               {" "}
               <Route path="/studios" component={Studios} />
               {" "}
               <Route path="/staff" component={Staff} />
               {" "}
               <Route path="/gallery" component={Gallery} />
               {" "}
               <Route exact path="/contactus" component={Contact} />
               {" "}
               <Redirect to="/home" />
            </Switch>{" "}
            <Footer />
         </div>
      );
   }
}

export default withRouter(Main);
