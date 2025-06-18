import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

// Layout Components
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import PlayerEfficiencyPage from './pages/PlayerEfficiencyPage';
import TeamEfficiencyPage from './pages/TeamEfficiencyPage';
import ComparisonPage from './pages/ComparisonPage';
import MetricsLibraryPage from './pages/MetricsLibraryPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/players" element={<PlayerEfficiencyPage />} />
            <Route path="/teams" element={<TeamEfficiencyPage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            <Route path="/metrics" element={<MetricsLibraryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </DataProvider>
  );
};

export default App;
