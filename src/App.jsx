import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { Suspense } from 'react';
import Claim from './pages/Claim';
import Loader from './components/UI/Loader';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Claim />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
