import appRouter from "../../route/appRouter";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className='max-h-vh max-h-dvh overflow-y-hidden'>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
