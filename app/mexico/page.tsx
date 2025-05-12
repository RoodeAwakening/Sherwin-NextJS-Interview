'use client'
import fetchData from "@/lib/fetchData";
import { useState } from "react";

function Mexico() {
    const [results, setResults] = useState(null);
    const getMexicoData = async () => {
        const mexicoUrl = "https://restcountries.com/v3.1/name/Mexico?fullText=true";
        const data = await fetchData(mexicoUrl);
        setResults(data);
    }

  return (
    <div>
        <button onClick={getMexicoData}>Click here to get Mexico data</button>
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

export default Mexico