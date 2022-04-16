import "./app.scss";

import React, { useCallback, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./core/routes";
import { FrapyClient } from "@frapy/api-client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { setTimeout } from "timers/promises";

type Props = {};

function App({}: Props) {
  const queryClient = useQueryClient();

  const frapyClient = new FrapyClient(process.env.REACT_APP_API ?? "");

  // // const { isLoading, data, error } = useQuery(
  // //   "profile",
  // //   () => frapyClient.user.retrieveUserBySession()
  // //   // {
  // //   //   onSuccess: () => {
  // //   //     queryClient.invalidateQueries("signIn");
  // //   //     console.log({ data });
  // //   //   },
  // //   // }
  // // );

  // // console.log({ data });

  // // const test = useCallback(async () => {
  // //   const rto = await mutateAsync({
  // //     email: "robert.enyedi@frapy.co",
  // //     password: "12345Aa*",
  // //   });
  // //   console.log({ rto });
  // // }, [mutateAsync]);

  // // let signIn = useMutation(
  // //   (payload: any) => frapyClient.auth.signIn(payload),
  // //   {
  // //     onError: (error: any) => {
  // //       console.log(error.response.data);
  // //       console.log(error.response.status);
  // //     },
  // //     onSuccess: (data: any) => {
  // //       console.log({data})
  // //     }
  // //   }
  // // );

  // // const { isLoading, data, error, mutateAsync } = useMutation(
  // //   frapyClient.auth.signIn,
  // //   {
  // //     onSuccess: () => {
  // //       queryClient.invalidateQueries("signIn");
  // //       let _data = data;
  // //       console.log({ _data });
  // //     },
  // //   }
  // // );

  // const { mutate } = useMutation((payload: any) =>
  //   frapyClient.auth.signIn(payload)
  // );

  // // const auth = async () => {
  // //   // const result = await frapyClient.auth.signIn({
  // //   //   email: "robert.enyedi@frapy.co",
  // //   //   password: "12345Aa*",
  // //   // });
  // //   // // const result = await frapyClient.user.retrieveUserBySession();
  // //   // console.log({ result });
  // //   // await mutateAsync({
  // //   //   email: "robert.enyedi@frapy.co",
  // //   //   password: "12345Aa*",
  // //   // });
  // // };

  // const test = async () => {
  //   mutate(
  //     { email: "robert.enyedi@frapy.co", password: "12345Aa*" },
  //     {
  //       onSuccess: ({ data }) => {
  //         console.log({ data });
  //       },
  //     }
  //   );
  //   // const result = await frapyClient.auth.signIn({
  //   //   email: "robert.enyedi@frapy.co",
  //   //   password: "12345Aa*",
  //   // });

  //   // console.log({ result });
  // };

  // const profile = async () => {
  //   const result = await frapyClient.user.retrieveUserBySession();

  //   console.log(result);
  // };

  // useEffect(() => {
  //   const timer = window.setTimeout(() => {
  //     test();
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const isLoggedIn: string = localStorage.getItem("access-token") ?? "";

  const routing = useRoutes(routes(isLoggedIn !== ""));

  return <div className="frapy-app">{routing}</div>;
}

export default App;
