// React Components
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

// Style Sheet
import "./App.css";

// Importing Spinner Component
import Spinner from "./Components/Spnner/Spinner";

// Importing slidebar Component
const Sidebar = lazy(() => import("./Components/Sidebar/Sidebar"));

// Import react router apis
import {
  _Dashboard,
  workers,
  factory,
  union,
  association,
  accounts,
  training,
  settings,
} from "./Api/ClientRoutingEndpoints/ClientEndpoints";

//  Importing Pages
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const AddWorkers = lazy(() => import("./Pages/Workers/AddWorkers/AddWorkers"));
const Workerslist = lazy(() =>
  import("./Pages/Workers/ListWorkers/ListWorkers"),
);
const AddFactory = lazy(() => import("./Pages/Factory/AddFactory/AddFactory"));

const FactoryList = lazy(() =>
  import("./Pages/Factory/FactoryList/FactoryList"),
);
const AddUnion = lazy(() => import("./Pages/Union/AddUnion/AddUnion"));
const UnionList = lazy(() => import("./Pages/Union/UnionList/UnionList"));
const AddAssociation = lazy(() =>
  import("./Pages/Association/AddAssociation/AddAssociation"),
);

function App() {
  return (
    <>
      <HashRouter>
        {/* Lazy Load */}
        <Suspense fallback={<Spinner />}>
          {/* Sidebar Start*/}
          <Sidebar>
            {/* Routing Start*/}
            <Routes>
              <Route
                path={_Dashboard}
                element={
                  <Suspense fallback={<Spinner />}>
                    <Dashboard />
                  </Suspense>
                }
              />

              <Route
                path={workers.add}
                element={
                  <Suspense fallback={<Spinner />}>
                    <AddWorkers />
                  </Suspense>
                }
              />
              <Route
                path={workers.list}
                element={
                  <Suspense fallback={<Spinner />}>
                    <Workerslist />
                  </Suspense>
                }
              />
              <Route
                path={factory.add}
                element={
                  <Suspense fallback={<Spinner />}>
                    <AddFactory />
                  </Suspense>
                }
              />
              <Route
                path={factory.list}
                element={
                  <Suspense fallback={<Spinner />}>
                    <FactoryList />
                  </Suspense>
                }
              />
              <Route
                path={union.add}
                element={
                  <Suspense fallback={<Spinner />}>
                    <AddUnion />
                  </Suspense>
                }
              />
              <Route
                path={union.list}
                element={
                  <Suspense fallback={<Spinner />}>
                    <UnionList />
                  </Suspense>
                }
              />

              <Route
                path={association.add}
                element={
                  <Suspense fallback={<Spinner />}>
                    <AddAssociation />
                  </Suspense>
                }
              />
            </Routes>
            {/* Routing End*/}
          </Sidebar>
          {/* Sidebar End*/}
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
