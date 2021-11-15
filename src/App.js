import { Container } from 'react-bootstrap';
import Users from './views/Users';
import { Routes, Route } from "react-router-dom";
import UserDetails from './views/UserDetails';

function App() {
  return (
    <div className="App">
      <Container>
      <Routes>
        <Route path="/" element={<Users></Users>} />
        <Route path=":ID" element={<UserDetails />} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
