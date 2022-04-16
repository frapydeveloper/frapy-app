import { FrapyClient } from "@frapy/api-client";

export const frapyClient = new FrapyClient(process.env.REACT_APP_API ?? "");
