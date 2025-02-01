import React from 'react';
import OnboardingForm from './components/OnboardingForm';
import { Dumbbell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 mb-12">
            <Dumbbell className="w-10 h-10 text-[var(--neon-green)]" />
            <h1 className="text-4xl font-bold neon-text">Athlete Connect</h1>
          </div>
          <OnboardingForm />
        </div>
      </div>
    </div>
  );
}

export default App;