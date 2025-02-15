import CryptoList from "./components/CryptoList.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Crypto } from "./interfaces/Crypto.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px black solid;
`;

const Header = styled.h1`
    text-align: center; 
    background-color: lightblue; 
    padding: 20px; 
    margin: 0;
    font-weight: bold;
    border-bottom: 5px solid black; 
`;

export default function App() {
    const [cryptoData, setCryptoData] = useState<Crypto[]>([]);

    // Get crypto data
    useEffect(() => {
        async function fetchCryptoData(): Promise<void> {
          const response = await fetch("https://api.coincap.io/v2/assets");
          const { data }: { data: Crypto[] } = await response.json();
          setCryptoData(data);
        }
        fetchCryptoData()
          .then(() => console.log("Data fetched successfully"))
          .catch((e: Error) => console.log("There was an error: " + e));
        }, []);
    return (
        <ParentDiv>
            <Header>Biggest Updated Cryptocurrencies</Header>
            <CryptoList cryptos={cryptoData} />
        </ParentDiv>
    );
}
