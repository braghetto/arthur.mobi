import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '0ad4dd29012cdf38d54b06ba6eaeee5a9931122b', queries });
export default client;
  