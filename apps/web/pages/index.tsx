import { NextPageContext } from "next";
import User from "pages/[user]";

import { getSession } from "@lib/auth";

function RedirectPage() {
  return;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session?.user?.id) {
    return { redirect: { permanent: false, destination: "/auth/login" } };
  }
  debugger;
  console.log("test");
  // else if(!session?.user?.password){

  // }

  return { redirect: { permanent: false, destination: "/event-types" } };
}

export default RedirectPage;
