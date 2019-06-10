import React from "react";
import logo from "./images/logo.svg";
import { MainWindow } from "./main-window";
import { MainTabControl, MainTabItem } from "./main-tab-control";

function App() {
  return (
    <MainWindow icon={logo} title="App Demo">
      <MainTabControl>
        <MainTabItem header="Tab-A">Content - A</MainTabItem>
        <MainTabItem header="Tab-B">Content - B</MainTabItem>
        <MainTabItem header="Tab-C">Content - C</MainTabItem>
      </MainTabControl>
    </MainWindow>
  );
}

export default App;
