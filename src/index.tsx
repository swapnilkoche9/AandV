import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Layout sideBar={<SideBar />} mainContent={<MainContent />} />
  </QueryClientProvider>,
);
