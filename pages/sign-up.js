import React from "react";
import AuthNavBar from "../components/auth/auth-navbar";
import SignUpForm from "../components/auth/SignUpForm";
import Head from "next/head";
import cookie from "cookie";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Sign Up | GoFundMe</title>
      </Head>
      <div className="text-primary_black relative lg:py-40 font-primary bg-gray-100 min-w-full min-h-screen">
        <AuthNavBar />

        <SignUpForm />
      </div>
    </>
  );
};

export const getServerSideProps = ({ req, res }) => {
  const { refresh_token } = cookie.parse(req.headers.cookie);

  if (refresh_token)
    return { redirect: { permanent: false, destination: "/" } };

  return { props: {} };
};

export default SignUp;
