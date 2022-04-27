////////////////////////////////////
// IMPORTING LIBRARIES
////////////////////////////////////

import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

////////////////////////////////////
// IMPORTING COMPONENTS
////////////////////////////////////

import { AnimatePresence } from "framer-motion";
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import SoundBar from "./subComponents/SoundBar";
import ContactPage from "./components/ContactPage";

////////////////////////////////////
// MAIN APP FUNCTION
////////////////////////////////////

function App() {

  const location = useLocation();

  return <>
    <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
          {/* For framer-motion animation on page change! */}

          <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/blog" component={BlogPage}/>
                <Route exact path="/work" component={WorkPage}/>
                <Route exact path="/skills" component={MySkillsPage}/>
                <Route exact path="/contact" component={ContactPage}/>
              </Switch>
          </AnimatePresence>
      </ThemeProvider>
    </>    
}

////////////////////////////////////
// EXPORTING APP
////////////////////////////////////

export default App