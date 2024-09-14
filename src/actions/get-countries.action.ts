"use server";

import { Country } from "@/types/country";

export async function getCountriesAction(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}
