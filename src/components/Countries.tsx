"use client";

import { Country } from "@/types/country";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface CountriesProps {
  dataPromise: Promise<Country[]>;
}

export default function Countries({ dataPromise }: CountriesProps) {
  const [countriesData, setCountriesData] = useState<Country[]>([]);

  useEffect(() => {
    dataPromise.then((data) => {
      setCountriesData(data);
    });
  }, [dataPromise]);

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Fetch countries</CardTitle>
        <CardDescription>
          Passing a promise from a server component to a client component in
          React{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-2">
        {!countriesData.length
          ? "Loading..."
          : countriesData.map((country: any) => (
              <Card
                key={country.name.common}
                className="w-full p-2  flex justify-between"
              >
                <CardContent className="text-sm space-y-1 w-96">
                  <h2 className="font-semibold">{country.name.common}</h2>
                  <p>Capital: {country.capital}</p>
                  <p>Region: {country.region}</p>
                  <p>Population: {country.population}</p>
                </CardContent>
                <CardContent className="text-sm">
                  <Image
                    className="py-2"
                    src={country.flags.png}
                    alt={country.name.common}
                    width={80}
                    height={80}
                  />
                </CardContent>
              </Card>
            ))}
      </CardContent>
    </Card>
  );
}
