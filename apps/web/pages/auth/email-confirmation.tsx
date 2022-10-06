import { XIcon } from "@heroicons/react/outline";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Button from "@calcom/ui/Button";

import { useLocale } from "@lib/hooks/useLocale";

import AuthContainer from "@components/ui/AuthContainer";

import { ssrInit } from "@server/lib/ssr";

export default function EmailConfirmation() {
  const { t } = useLocale();
  const router = useRouter();
  const { token } = router.query;
  const [tokenid, setToken] = useState(token);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setMessage("Invalid Url");
    } else if (!message) {
      fetch("/api/auth/email-confirmation", {
        method: "POST",
        body: JSON.stringify({ token: tokenid }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMessage(data.message);
        });
    }
  });

  if (!tokenid) return <p className="p-4 text-center">Processing..</p>;

  return (
    <AuthContainer title="" description="">
      <div>
        {!token && (
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <XIcon className="h-6 w-6 text-red-600" />
          </div>
        )}
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
            {message}
          </h3>
        </div>
      </div>
    </AuthContainer>
  );
}
