import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyButton from "./components/my-button/My-button";

const App = () => {
  const isLoggedIn: boolean = true;

  return (
    <>
    <BrowserRouter>
      {isLoggedIn ? (
        <MainLayout>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/analytics" element={<h1>Analytics</h1>} />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/reports" element={<h1>Reports</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Routes>
        </MainLayout>
      ) : (
        <AuthLayout />
      )}
    </BrowserRouter>
   
    <MyButton />

    <MyButton />
    </>
  );
};

export default App;
