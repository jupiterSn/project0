const AuthLayout = () => {
  return (
    // Main wrapper: full screen, centered content, light gray background
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Container Card */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header Section (Logo/Title) */}
        <div className="text-center">
          <div className="flex justify-center">
            {/* Replace with your actual logo */}
            <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              B
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your details to continue.
          </p>
        </div>

        {/* Content Section: This is where Login/Register forms will render */}
        <div className="mt-8">
        </div>

        {/* Optional Footer Branding */}
        <div className="text-center text-xs text-gray-400 mt-4">
          &copy; 2024 YourBrand Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;