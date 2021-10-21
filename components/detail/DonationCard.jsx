import router from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { APIURL } from "../../config/config";
import DonateItem from "./DonateItem";

const DonationCard = () => {
  const uuid = router.query?.uuid;
  const [donations, setDonations] = useState([]);

  useEffect(async() => {
    const res = await fetch(`${APIURL}/fundraiser/detail/donations/${uuid}`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      }
    });

    if (res.ok) {
      const data = await res.json();
      setDonations(data?.donations);
    }
  }, []);

  return (
    <div>
    {
      donations?.length > 0 ?donations.map((donation, index) => (
        <React.Fragment key={index}>
          <DonateItem donate={donation} />
          {
            index>=donations.length-1? "":<hr/>
          }
        </React.Fragment>
      ))
      :
      <p>
        Loading...
      </p>

    }
    </div>
  );
};

export default DonationCard;
