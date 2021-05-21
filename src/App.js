import Board from './components/Board';
import StartModal from './components/StartModal';
import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modalShow, setModalShow] = React.useState(true);
  return (
    <div className="App">
      <Board />
      <StartModal show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
