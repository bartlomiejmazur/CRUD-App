import React from "react";
import { Link } from "react-router-dom";

import CampaignItem from "./CampaignItem/CampaignItem";

import { css } from "@emotion/react";
import { Button } from "../../reuseComponent/Button";
import { Input, FormGroup } from "../../reuseComponent/Form";
import { Container } from "../../reuseComponent/Container";
import { Flexbox } from "../../reuseComponent/Flexbox";

import {
  title,
  spinner,
  search_title,
  add_section,
  item,
  empty,
} from "./CampaignList.style";
import { Spinner } from "../../reuseComponent/Spinner";
import { FaSearch, FaPlus } from "react-icons/fa";

import { db } from "../../../firebase-config";
import { collection, getDocs, deleteDoc, doc, query } from "firebase/firestore";

const CampaignList = () => {
  const [data, setData] = React.useState({ data: [], fillterData: [] });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [query, setQuery] = React.useState({ text: "" });

  const dataCollectionRef = collection(db, "campaigns");

  React.useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const dataDb = await getDocs(dataCollectionRef);
        setData({
          data: dataDb.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
          fillterData: dataDb.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })),
        });
        setLoading(false);
      } catch (error) {
        await setError(error);
      }
    };

    getData();
  }, [active]);

  const deleteItem = async (id) => {
    setActive(!active);
    const docRef = doc(db, "campaigns", id);
    await deleteDoc(docRef);
  };

  const searchCampaings = (event) => {
    setQuery({ ...query, text: event.target.value });
    const theResults = data.data.filter((el) => {
      return el.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setData({
      ...data,
      fillterData: theResults,
    });
  };

  return (
    <>
      <Container>
        <Flexbox css={add_section}>
          <h3 css={title}>Campaign Manager</h3>
          <Link to={`/campaigns/add`}>
            <Button variant="green">
              New <FaPlus />
            </Button>
          </Link>
        </Flexbox>
      </Container>

      <Container>
        <FormGroup>
          <h3 css={search_title}>Search Campaign</h3>

          <Input
            placeholder="Enter campaing name..."
            name="text"
            value={query.text}
            onChange={searchCampaings}
          />
        </FormGroup>
        {data.data.length === 0 ? (
          <h5 css={empty}>List is empty</h5>
        ) : (
          <>
            {loading ? (
              <Spinner css={spinner} />
            ) : (
              <div css={item}>
                <CampaignItem
                  data={data.data}
                  filterData={data.fillterData}
                  deleteItem={deleteItem}
                />
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default CampaignList;
