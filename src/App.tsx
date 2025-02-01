
import OnboardingForm from './components/OnboardingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ProfileView from './components/ProfileView';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/onboarding" element={<OnboardingForm />} />
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        <Route path="/profile/:id" element={<ProfileView />} />
      </Routes>
    </Router>
  );
}

export default App;