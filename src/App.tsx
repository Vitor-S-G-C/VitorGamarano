import Home from "./page/Home";
import ErrorBoundary from "./componentes/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </LanguageProvider>
  );
};

export default App;
