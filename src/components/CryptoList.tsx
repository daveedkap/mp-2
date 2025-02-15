import styled from "styled-components";
import { Crypto } from "../interfaces/Crypto.ts";

const CryptoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightblue;
`;

const CryptoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color:rgb(115, 137, 177);
    border-radius: 10px;
    width: 80%;
    text-align: center;
    border: 3px black solid;
    font: bold calc(2px + 1vw) Times New Roman;
`;

export default function CryptoList({ cryptos }: { cryptos: Crypto[] }) {
    return (
        <CryptoContainer>
            {
                cryptos.map((crypto) => 
                    <CryptoCard key={crypto.id}>
                        <h2>{crypto.rank} {crypto.symbol}</h2>
                        <p>Price: ${Number(crypto.priceUsd)}</p>
                    </CryptoCard>
                )
            }
        </CryptoContainer>
    );
}
