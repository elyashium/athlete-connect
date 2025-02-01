
import OnboardingForm from './components/OnboardingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/onboarding" element={<OnboardingForm />} />
      </Routes>
    </Router>

    // <div className="min-h-screen bg-black">
    //   <div className="container mx-auto px-4 py-16">
    //     <div className="flex flex-col items-center justify-center">

    //       <div className="flex items-center gap-3 mb-12">
    //         <Dumbbell className="w-10 h-10 text-[var(--neon-green)]" />
    //         <h1 className="text-4xl font-bold neon-text">Athlete Connect</h1>
    //       </div>

    //       <OnboardingForm />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;