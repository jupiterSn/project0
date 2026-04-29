import React from "react";
import Login from './features/auth/login/login';



const App: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-100">

      {/* Main Content */}
      <main className="flex items-center justify-center py-10">
        <Login />
      </main>
    </div>
  );
};

export default App;