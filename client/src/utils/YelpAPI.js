import { API_BASE_URL, Yelp_Token } from "./config";
import queryString from "query-string";

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${Yelp_Token}`,
      Origin: "localhost",
      withCredentials: true,
    },
  });
}
