import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Nesting() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="Sate, Nasi Goreng">Kuliner</Link>
        </li>
        <li>
          <Link to="Wisata Alam, Museum">Travelling</Link>
        </li>
        <li>
          <Link to="Ibis, JW Marriot">Review Hotel</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h3>Please select a topic</h3>} />
        <Route path=":topicId" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
