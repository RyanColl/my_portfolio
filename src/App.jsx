
import './App.scss';
import BuildingDependencies from './Loading/BuildingDependencies';
import React from 'react';
import Index from './pages/Index';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from './NavBar/NavBar';
import { Context } from './Context/Store';

export const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

function App() {
  const {state, dispatch} = React.useContext(Context);
  // const [loading, setLoading] = React.useState(true);
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, [])
  return (
    <Router>
      <AnimatePresence exitBeforeEnter={true}>
        {!state.loading ? 
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        >
          <NavBar onClick={() => {}} />
          <div className="App">
            <AnimatePresence exitBeforeEnter={true}>
              <Switch location={window.location} key={window.location.pathname}>
                <Route path="/about" component={BuildingDependencies} />
                <Route path="/settings" component={BuildingDependencies} />
                <Route path="/" component={Index} />
              </Switch>
            </AnimatePresence>
          </div>
        </motion.div> :
        <BuildingDependencies />
        }
      </AnimatePresence>
    </Router>
  ); 
}

export default App;
