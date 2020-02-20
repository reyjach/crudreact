import React ,{Component} from 'react';
import Router from './Componentes/Router';

class App extends Component{

  render() {
    return (
      <div>
        <React.Fragment>
          <Router></Router>
        </React.Fragment>
      </div>
    );
  }
  
}

export default App;
