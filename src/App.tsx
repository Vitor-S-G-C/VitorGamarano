import Home from "./page/Home";
import ErrorBoundary from "./componentes/ErrorBoundary";


const App = () => {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
};

export default App;
