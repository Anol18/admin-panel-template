import { Suspense, lazy } from "react";
const Card = lazy(() =>
  import("../../Components/Charts/CardContainer/CardContainer"),
);
function Dashboard() {
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Card />
      </Suspense>
    </>
  );
}

export default Dashboard;
