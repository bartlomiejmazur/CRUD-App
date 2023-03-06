import React from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase-config";

import { css } from "@emotion/react";
import { Container } from "../../reuseComponent/Container";
import {
  Grid,
  Item,
  Content,
  title,
  center,
  spinner,
} from "./ViewCampaign.style";
import { Button } from "../../reuseComponent/Button";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../../reuseComponent/Spinner";
import { FaArrowLeft } from "react-icons/fa";

const ViewCampaign = () => {
  const { campaignId } = useParams();

  const docRef = doc(db, "campaigns", campaignId);

  const [item, setItem] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true);
        const itemDb = await getDoc(docRef);
        setItem(itemDb.data());
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    getItem();
  }, [campaignId]);

  return (
    <div css={center}>
      {loading ? (
        <Spinner css={spinner} />
      ) : (
        <>
          <h2 css={title}>View Campaign</h2>
          <Container variant="border">
            {Object.keys(item).length > 0 && (
              <Grid>
                <Item variant="name">Name:</Item>
                <Content variant="name">{item.name}</Content>
                <Item variant="keywords">Keywords:</Item>
                <Content variant="keywords">{item.keywords}</Content>
                <Item variant="bid">Bid:</Item>
                <Content variant="bid">{item.bid_amount}</Content>
                <Item variant="fund">Fund:</Item>
                <Content variant="fund">{item.fund}</Content>
                <Item variant="status">Status:</Item>
                <Content variant="status">
                  {item.status > 0 ? "On" : "Off"}
                </Content>
                <Item variant="town">Town:</Item>
                <Content variant="town">{item.town}</Content>
                <Item variant="radius">Radius:</Item>
                <Content variant="radius">{item.radius} Kilometers</Content>
              </Grid>
            )}

            <Link to={`/campaigns/list`}>
              <Button variant="orange">
                <FaArrowLeft css={{ margin: "0 10px", fontSize: "1rem" }} />
                Back
              </Button>
            </Link>
          </Container>
        </>
      )}
    </div>
  );
};

export default ViewCampaign;
