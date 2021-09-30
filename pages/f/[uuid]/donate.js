import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../../../components/donate/NavBar";
import Header from "../../../components/donate/Header";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PayForm from "../../../components/donate/PayForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";

const Donate = () => {
  const [donationData, setDonationData] = useState();
  const [donation, setDonation] = useState("");
  const [tip, setTip] = useState("0");
  const [showPayment, setShowPayment] = useState(false);
  const [donorName, setDonorName] = useState("");

  const router = useRouter();
  const { uuid } = router.query;

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) setDonorName(user.full_name);
  }, [user]);

  const handleShowPayment = () => {
    if (donation.length && (tip.length || tip == "0") && donorName.length) {
      setDonationData({
        amount: (parseInt(donation) + parseInt(tip)) * 100,
        name: donorName,
        fundraiser_id: uuid,
      });
      setShowPayment(true);
    } else if (!donorName.length) {
      toast.error("Please provide your full name ");
    } else {
      toast.error("Please provide a valid donation amount and tip value");
    }
  };

  useEffect(() => {
    if (donation.length && (!tip.length || tip == "0")) {
      setTip(parseFloat(parseInt(donation) * 0.15).toFixed(2));
    }
  }, [donation]);

  return (
    <>
      <Head>
        <title>Donate to Tragic accident of a young girl</title>
      </Head>

      <div className="w-full min-h-screen bg-gray-100">
        <NavBar />

        <div className="w-full lg:w-10/12 lg:mx-auto md:pt-24 lg:pt-32 flex flex-col lg:flex-row  lg:pb-20 h-full">
          <div className="w-full lg:w-7/12 lg:rounded-md  md:px-5 md:py-4 lg:py-2 bg-white">
            <div className="hidden lg:block px-3 border-b mb-3">
              <Link href={`/f/${uuid}/`}>
                <button className="shadow-sm py-2 px-3 rounded-md my-5 text-gray-800 bg-gray-100 flex  font-semibold outline-none">
                  <FontAwesomeIcon
                    className="text-2xl mr-2"
                    icon={faChevronLeft}
                  />
                  <span>Return to fundraiser</span>
                </button>
              </Link>
            </div>
            <Header />

            <div className="px-3 py-4 md:py-8 border-b">
              <h5 className="text-lg font-semibold text-gray-800">
                Enter your donation
              </h5>
              <div className="flex items-center border p-3 rounded-md my-3">
                <h3 className="text-2xl">USD</h3>

                <div className="flex items-center">
                  <input
                    type="number"
                    min="0"
                    value={donation}
                    onChange={(e) => setDonation(e.target.value)}
                    onFocus={(e) => setShowPayment(false)}
                    className="block w-full text-4xl md:text-5xl font-semibold text-right outline-none appearance-none"
                  />
                  <h3 className="text-5xl font-semibold text-gray-800 mb-0">
                    .00
                  </h3>
                </div>
              </div>
            </div>

            <div className="border-b pb-4">
              <h6 className="text-gray-800 font-semibold my-3">Donor Name</h6>
              <input
                type="text"
                placeholder="Please provide your full name"
                value={donorName}
                onFocus={() => setShowPayment(false)}
                onChange={(e) => setDonorName(e.target.value)}
                className="block w-full rounded-md border  py-2 px-2 outline-none appearance-none"
              />
            </div>

            <div className="px-3 py-4 md:py-8 border-b">
              <h5 className="text-lg font-semibold text-gray-800">
                Tip GoFundMe Services
              </h5>
              <p className="mt-3 text-sm text-gray-500">
                GoFundMe has a 0% platform fee for organisers. GoFundMe will
                continue offering its services thanks to donors who leave an
                optional amount here:
              </p>
              <h6 className="text-gray-800 font-semibold my-3">Tip amount</h6>
              <input
                type="number"
                min="0"
                value={tip}
                onChange={(e) => setTip(e.target.value)}
                onFocus={(e) => setShowPayment(false)}
                className="block w-full rounded-md border md:w-6/12 py-2 px-2 font-semibold outline-none appearance-none"
              />

              {!showPayment && (
                <div className="my-3">
                  <button
                    onClick={handleShowPayment}
                    className="py-3 px-4 w-full shadow-md md:w-3/12 rounded-md bg-primary_green text-gray-50  font-semibold"
                  >
                    Continue
                  </button>
                </div>
              )}

              <div className={`${showPayment ? "block" : "hidden"} my-3`}>
                {showPayment && <PayForm donationData={donationData} />}
              </div>

              <p className="text-sm md:text-base text-gray-400">
                This site is protected by reCAPTCHA and the Google privacy
                policy and Terms of Service apply.
              </p>
            </div>

            <div className="flex my-2  items-center py-3 px-2 md:px-0">
              <div className="flex justify-center items-center h-10 w-10 rounded-full mr-4 text-blue-700 bg-blue-100">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <div className="w-11/12">
                <h3 className=" font-semibold text-gray-800">
                  GoFundMe Guarantee
                </h3>

                <p className="text-gray-500 text-sm">
                  In the rare event that something isn't right, we will work
                  with you to determine if misuse has occurred. Learn more.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12 ">
            <div className="w-full rounded-md hidden lg:block bg-white shadow-md py-5 px-4 ml-10">
              <h4 className="font-semibold my-4 text-lg ">Your Donation</h4>

              <div className="text-gray-500 text-lg">
                <div className="flex justify-between items-center">
                  <h5>Your Donation</h5>
                  <h5>${donation.length ? donation : 0}</h5>
                </div>
                <div className="flex border-b justify-between items-center pb-2">
                  <h5>GoFundMe Tip</h5>
                  <h5>${tip}</h5>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <h5>Total Due today</h5>
                  <h5>
                    $
                    {donation.length ? parseInt(donation) + parseFloat(tip) : 0}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
