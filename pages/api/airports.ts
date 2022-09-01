// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import airportData from "./data/airports.json";
import { Country } from "../../src/enums";
import { AirportsApiReturnType } from "../../src/types";

/**
 * Airport data pulled from
 * https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json
 *
 * */
export default function handler(req, res) {
  const json = filterCodesByCountry(airportData, Country.UNITED_STATES);
  res.status(200).json(json);
}

function filterCodesByCountry(
  airports: AirportsApiReturnType[],
  country: Country
) {
  return airports.filter((airport) => {
    return airport.country === country;
  });
}
