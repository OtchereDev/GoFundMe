import React, { useState } from "react";
import NavBar from "../../../components/index/NavBar";
import SearchComp from "../../../components/index/SearchComp";
import ToggleMenu from "../../../components/index/ToggleMenu";
import Head from "next/head";
import Header from "../../../components/detail/Header";
import Description from "../../../components/detail/Description";
import Footer from "../../../components/index/Footer";
import { APIURL } from "../../../config/config";
import Modal from "../../../components/Modal"

const Detail = ({ data }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [isModalOpen, setIsModalOpen] =useState(false)
  const [modalChildren,setModalChildren] = useState(null)

  const {
    amountRaised,
    goal_amount,
    image_url,
    donations,
    title,
    createdAt,
    organiser,
    category,
    description,
    no_of_donors,
  } = data;

  return (
    <>
      <Head>
        <title>
          Fundraiser by {data.organiser.fullName} : {data.title}
        </title>
      </Head>
      <div className="w-full z-0 pt-14 lg:pt-20 min-h-screen">
        <SearchComp showSearch={showSearch} setShowSearch={setShowSearch} />
        <ToggleMenu toggler={toggler} setToggler={setToggler} />
        <NavBar setShowSearch={setShowSearch} setToggler={setToggler} />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setModalChildren={setModalChildren}> {modalChildren} </Modal>
        <Header
          amountRaised={amountRaised}
          goal_amount={goal_amount}
          image_url={image_url}
          donations={donations}
          setIsModalOpen={setIsModalOpen}
          setModalChildren={setModalChildren}
        />

        <Description
          title={title}
          createdAt={createdAt}
          organiser={organiser}
          category={category}
          description={description}
          donations={donations}
          NumberOfDonations={no_of_donors}
          setIsModalOpen={setIsModalOpen}
          setModalChildren={setModalChildren}
        />

        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps = async (req, res) => {
  const uuid = req.params.uuid;
  const request = await fetch(`${APIURL}/fundraiser/detail/${uuid}`);

  if (!request.ok) return { redirect: { permanent: false, destination: "/" } };

  const data = await request.json();

  return {
    props: { data },
  };
};

export default Detail;
