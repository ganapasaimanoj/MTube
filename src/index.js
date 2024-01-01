import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/layout/App";
import { Provider } from "react-redux";

import appStore from "./redux/appStore";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <App />
  </Provider>,
);
