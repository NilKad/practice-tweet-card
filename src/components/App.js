import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TweetsPage from 'pages/TweetPage';
import TweetsLayout from 'layouts/TweetsLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TweetsLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
