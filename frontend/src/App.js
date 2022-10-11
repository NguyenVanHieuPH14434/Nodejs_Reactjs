import Header from './Shared/Header/Header.js';

import './App.scss';
import Router from './Router.js';
// import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Router />
        </div>
    );
}

export default App;
