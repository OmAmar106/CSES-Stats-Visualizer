import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Output from './Output';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default App;
