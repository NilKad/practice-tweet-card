import { Route, Routes, Navigate, Router } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TweetsPage from 'pages/TweetPage';
import TweetsLayout from 'layouts/TweetsLayout';

function App() {
  // const toHome = () => {};
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TweetsLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
