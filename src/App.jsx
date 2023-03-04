import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

import NavBar from "./components/Navbar/NavBar";
import CampaignList from "./components/campaigns/CampaignList/CampaignList";
import AddCampaign from "./components/campaigns/AddCampaign/AddCampaign";
import ViewCampaign from "./components/campaigns/ViewCampaign/ViewCampaign";
import EditCampaign from "./components/campaigns/EditCampaign/EditCampaign";

function App() {
  const [data, setData] = React.useState([]);
  const dataCollectionRef = collection(db, "campaigns");

  React.useEffect(() => {
    const getData = async () => {
      const dataDb = await getDocs(dataCollectionRef);
      setData(dataDb.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getData();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/campaigns/list"} />} />
        <Route
          path={"/campaigns/list"}
          element={<CampaignList data={data} />}
        />
        <Route path={"/campaigns/add"} element={<AddCampaign />} />
        <Route
          path={"/campaigns/view/:campaignId"}
          element={<ViewCampaign />}
        />
        <Route
          path={"/campaigns/edit/:campaignId"}
          element={<EditCampaign />}
        />
      </Routes>
    </div>
  );
}

export default App;
