import { GetServerSideProps } from "next";

import prisma from "@calcom/prisma";

//import { ssrInit } from "@server/lib/ssr";
import { ssgInit } from "@server/lib/ssg";

export async function getServerSideProps(context: any) {
  console.log(context);
  /* async (action: string) => {
    const res = await fetch('/api/integrations/getaccesstoken?id=${id}', {
      method: "POST",
     // body: JSON.stringify({ id: props.id, action }),
      headers: {
        id: "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  }, */

  //  const ssg = await ssgInit(context);
  // const ssr = await ssrInit(context);

  //export async function gettoken(id: number) {

  /*     const zoomcredentials = await prisma.credential.findFirst({
        where: {
          id: id,
        },
        select: {
          type: true,
          key: true,
        },
      }); 
      return zoomcredentials?.key.access_token; */
}
