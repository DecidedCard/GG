import axios from "axios";

import formatDate from "@/util/formatDate";

const apiKey = process.env.NEXT_PUBLIC_NEXON_API_1;

const today = formatDate(new Date());

const baseURL = "https://open.api.nexon.com";

const maple = axios.create({
  baseURL: baseURL,
  headers: { "x-nxopen-api-key": apiKey },
});
