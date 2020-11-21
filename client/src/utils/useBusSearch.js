import { useState, useEffect } from "react";
import * as api from "./YelpAPI";

export default function useBusinessSearch(term, location) {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  const [events, setEvents] = useState([]);
  const [amountEventResults, setAmountEventResults] = useState();
  const [eventParams, setEventParams] = useState({ location });

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async () => {
      try {
        const rawData = await api.get("/businesses/search", searchParams);
        const resp = await rawData.json();
        setBusinesses(resp.businesses);
        setAmountResults(resp.total);

        const rawEventData = await api.get("/events/", eventParams);
        const respEvent = await rawEventData.json();
        setEvents(respEvent.events);
        setAmountEventResults(respEvent.total);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [eventParams, searchParams]);
  return [
    businesses,
    amountResults,
    searchParams,
    setSearchParams,
    events,
    amountEventResults,
    eventParams,
    setEventParams,
  ];
}
