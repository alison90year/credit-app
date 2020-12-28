import React  from "react";
import { HashRouter  ,} from 'react-router-dom'
import Router from './routes/router'
import routerConfig from "./routes/config.js";
import { GlobalStyle } from './style'

function App() {
  return (
      <HashRouter>
          <GlobalStyle></GlobalStyle>
                  <Router routerConfig={routerConfig}></Router>
      </HashRouter>
  );
}
export default App;
