import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletAuthProvider } from "./contexts/WalletAuthContext";
import HomePage from "./components/HomePage";
import DashboardPage from "./components/DashboardPage";
import DynamicDashboard from "./components/DynamicDashboard";
import TopGainersPage from "./components/TopGainersPage";
import InvestPage from "./components/InvestPage";
import WalletFundsPage from "./components/WalletFundsPage";
import AIAutoInvestPage from "./components/AIAutoInvestPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WalletAuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DynamicDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/top-gainers"
              element={
                <ProtectedRoute>
                  <TopGainersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/invest"
              element={
                <ProtectedRoute>
                  <InvestPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wallet-funds"
              element={
                <ProtectedRoute>
                  <WalletFundsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ai-auto-invest"
              element={
                <ProtectedRoute>
                  <AIAutoInvestPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </WalletAuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
