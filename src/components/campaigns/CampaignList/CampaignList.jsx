import React from "react";
import { Link } from "react-router-dom";

import CampaignItem from "./CampaignItem/CampaignItem";

import { css } from "@emotion/react";
import { Button } from "../../reuseComponent/Button";
import { Input, FormGroup } from "../../reuseComponent/Form";
import { Container } from "../../reuseComponent/Container";
import { Flexbox } from "../../reuseComponent/Flexbox";
import { title, spinner } from "./CampaignList.style";
import { Spinner } from "../../reuseComponent/Spinner";
import { FaSearch, FaPlus } from "react-icons/fa";

import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const CampaignList = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const dataCollectionRef = collection(db, "campaigns");

  React.useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const dataDb = await getDocs(dataCollectionRef);
        setData(dataDb.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Container>
        <Flexbox>
          <h3 css={title}>Campaign Manager</h3>
          <Button variant="green">
            <Link
              css={{ textDecoration: "none", color: "white" }}
              to={`/campaigns/add`}
            >
              New <FaPlus />
            </Link>
          </Button>
        </Flexbox>
      </Container>

      <Container>
        <FormGroup>
          <h3 css={{ textAlign: "center" }}>Search Campaign</h3>

          <Input placeholder="Enter campaing name..." />
          <Flexbox>
            <Button>
              Search <FaSearch />
            </Button>
          </Flexbox>
        </FormGroup>
        {loading ? <Spinner css={spinner} /> : <CampaignItem data={data} />}
      </Container>
    </>
  );
};

export default CampaignList;
