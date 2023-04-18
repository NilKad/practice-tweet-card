import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TweetsPage from 'pages/TweetPage';
import TweetsLayout from 'layouts/TweetsLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TweetsLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
