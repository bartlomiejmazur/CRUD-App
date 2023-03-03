import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import CampaignList from "./components/campaigns/CampaignList/CampaignList";
import AddCampaign from "./components/campaigns/AddCampaign/AddCampaign";
import ViewCampaign from "./components/campaigns/ViewCampaign/ViewCampaign";
import EditCampaign from "./components/campaigns/EditCampaign/EditCampaign";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/campaigns/list"} />} />
        <Route path={"/campaigns/list"} element={<CampaignList />} />
        <Route path={"/campaigns/add"} element={<AddCampaign />} />
        <Route
          path={"/campaigns/view/:campaignId"}
          element={<ViewCampaign />}
        />
        <Route
          path={"/campaigns/view/:campaignId"}
          element={<EditCampaign />}
        />
      </Routes>
    </div>
  );
}

export default App;
