'use client';
import fetchData from "@/lib/fetchData";
import { useState } from "react";

interface CountryData {
    name: {
        common: string;
        official: string;
    };
    region: string;
}

function Canada() {
    const [results, setResults] = useState<CountryData[] | null>(null);
    const getCanadaData = async () => {
        const canadaUrl = "https://restcountries.com/v3.1/name/Canada?fullText=true";
        const data = await fetchData(canadaUrl);
        setResults(data);
    }

  return (
    <div>
        <button onClick={() => {getCanadaData()}}>Click here to get canada data</button>
        <div>
            {results && results[0]?.name && (
            <>
                <p>Common Name: {results[0].name.common}</p>
                <p>Official Name: {results[0].name.official}</p>
                <p>Region: {results[0].region}</p>
            </>
            )}
        </div>
        </div>
  )
}

export default Canada