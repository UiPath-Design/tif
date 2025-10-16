import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import Header from "./components/Header";
import TIFForm from "./components/TIFForm";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="grid-wrapper min-h-screen transition-colors duration-200">
        <div className="grid-background"></div>
        <div className="relative z-10">
          <Header />
          <main>
            <TIFForm />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
