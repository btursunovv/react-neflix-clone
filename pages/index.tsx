<<<<<<< HEAD
import Billboard from "@/components/Billboard";
import NavBar from "@/components/NavBar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Billboard />
=======
export default function Home() {
  return (
    <>
      <h1>Netflix clone</h1>
>>>>>>> e87a011aa1f20236fe2eaa0139c641f1319203e3
    </>
  );
}
