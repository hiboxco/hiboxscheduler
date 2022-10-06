import { TrashIcon } from "@heroicons/react/solid";
import crypto from "crypto";
import { GetServerSidePropsContext } from "next";
import { signOut } from "next-auth/react";
import { ProfilePageJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { ComponentProps, FormEvent, RefObject, useEffect, useMemo, useRef, useState } from "react";
import { DatePickerProps } from "react-date-picker";
import { useForm, Controller } from "react-hook-form";
import TimezoneSelect, { ITimezone } from "react-timezone-select";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import showToast from "@calcom/lib/notification";
import Button from "@calcom/ui/Button";
import { Form, TextField } from "@calcom/ui/form/fields";

import { getSession } from "@lib/auth";
import prisma from "@lib/prisma";
import { trpc } from "@lib/trpc";
import { inferSSRProps } from "@lib/types/inferSSRProps";

import Shell from "@components/Shell";
import SkeletonLoader from "@components/availability/SkeletonLoader";
import { DateRangePicker } from "@components/ui/form/DateRangePicker";

interface FilterValues {
  textsearch: string | null;
  startdate: Date | null;
  periodDates: { startDate: Date | null; endDate: Date | null };
  enddate: Date | null;
  status: boolean | null;
  recordlimit: number | null;
}

type Props = inferSSRProps<typeof getServerSideProps>;
function RenderUsers(props: Props) {
  //  console.log(props);
  return (
    <div>
      <table className=" w-full bg-white text-sm">
        <tr className="bg-gray-900 text-white">
          <th className=" p-2 text-left ">Sr.No.</th>
          <th className=" p-2 text-left ">Name</th>
          <th className=" p-2 text-left ">Username</th>
          <th className=" p-2 text-left ">Email</th>
          <th className=" p-2 text-left ">TimeZone</th>
          <th className=" p-2 text-left ">Status</th>
          <th className=" p-2 text-left ">Created Date</th>
        </tr>
        {props.users.map(
          (
            user: {
              id: bigint;
              name: string;
              username: string;
              email: string;
              timeZone: string;
              verified: boolean;
              createdDate: string;
            },
            i = 1
          ) => (
            <tr
              key={"usr-" + user.id}
              className={i % 2 == 0 ? "bg-indigo-50 hover:bg-indigo-100" : "bg-white hover:bg-indigo-100"}>
              <td className=" p-2">{i}</td>
              <td className=" p-2">{user.name}</td>
              <td className=" p-2">{user.username}</td>
              <td className=" p-2">{user.email}</td>
              <td className=" p-2">{user.timeZone}</td>
              <td className=" p-2">{user.verified?"Yes":"No"}</td>
              <td className=" p-2">{user.createdDate}</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
}

export default function Settings(props: Props) {
  const form = useForm<FilterValues>();
  const { formState } = form;
  const { isSubmitting } = formState;
  const { t } = useLocale();
  const heading = t("user_list");
  const subheading = t("view_user_list");

  const [periodDates] = useState<{ startDate: Date; endDate: Date }>({
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now()),
  });

  const formMethods = useForm({
    defaultValues: {
      periodDates: {
        startDate: periodDates.startDate,
        endDate: periodDates.endDate,
      },
    },
  });

  return (
    <Shell
      heading={heading ?? ("hiboxscheduler.com" as string)}
      subtitle={subheading ?? ("" as string)}
      CTA=""
      customLoader={<SkeletonLoader />}>
      <div className="sm-flex mb-3 block">
        <Form
          className="flex gap-x-2"
          form={form}
          handleSubmit={async (values) => {
            console.log(values.textsearch);
          }}>
          <span>
            <TextField
              id="textsearch"
              label={t("")}
              placeholder="Search text goes here.."
              required
              {...form.register("textsearch")}
            />
          </span>


 <span>
            <div>
              <Controller
                name="periodDates"
                control={formMethods.control}
                defaultValue={periodDates}
                render={() => (
                  <DateRangePicker
                    startDate={formMethods.getValues("periodDates").startDate}
                    endDate={formMethods.getValues("periodDates").endDate}
                    onDatesChange={({ startDate, endDate }) => {
                      formMethods.setValue("periodDates", {
                        startDate,
                        endDate,
                      });
                    }}
                    {...form.register("periodDates")}
                  />
                )}
              />
            </div>
          </span>

          <span>
            <div>
              <Controller
                name="periodDates"
                control={formMethods.control}
                defaultValue={periodDates}
                render={() => (
                  <DateRangePicker
                    startDate={formMethods.getValues("periodDates").startDate}
                    endDate={formMethods.getValues("periodDates").endDate}
                    onDatesChange={({ startDate, endDate }) => {
                      formMethods.setValue("periodDates", {
                        startDate,
                        endDate,
                      });
                    }}
                    {...form.register("periodDates")}
                  />
                )}
              />
            </div>
          </span>
          <Button className="inline-flex items-center justify-center" type="submit">
            Search Now
          </Button>
        </Form>
      </div>

      <RenderUsers users={props.users} />
    </Shell>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (!session?.user?.id) {
    return { redirect: { permanent: false, destination: "/auth/login" } };
  }

  const users = await prisma.user.findMany({
 /*    where:{
      email: email,
    }, */
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      timeZone: true,
      plan: true,
      verified: true,
      emailVerified: true,
      createdDate: true,
    },
    orderBy: [{ id: "desc" }],
    take: 50,
  });
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
};