import { FetchDto } from "..";
import { API_BASE_URL, API_CORS_PROXY } from "../../config/constants";

export function fetchApiGet(request: FetchDto) {
  const url = encodeURIComponent(`${API_BASE_URL}${request.url}`);
  return fetch(`${API_CORS_PROXY}${url}`, {
    method: "get",
  }).then((res) => res.json());
}
