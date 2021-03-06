// routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RouterComponent from "./RouterComponent";
// theme
import ThemeProvider from "./theme";
// components
import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart";

// class
export default function App() {
  return (
    <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <RouterComponent />
    </ThemeProvider>
  )
}