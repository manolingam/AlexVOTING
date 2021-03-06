import React, { useState } from "react";
import "antd/dist/antd.css";
import { ethers } from "ethers";
import "./App.css";
import { useExchangePrice } from "./hooks";
import { Account } from "./components";

import Vote from "./Vote.js";
import TimeReport from "./TimeReport.js";
import VoteReport from "./VoteReport.js";

/// CHANGE THIS TO YOUR INFURA ID
const mainnetProvider = new ethers.providers.InfuraProvider(
    "mainnet",
    "2717afb6bf164045b5d5468031b93f87"
);
const localProvider = mainnetProvider; //new ethers.providers.JsonRpcProvider(process.env.REACT_APP_PROVIDER?process.env.REACT_APP_PROVIDER:"http://localhost:8545")

function App() {
    const [address, setAddress] = useState();
    const [injectedProvider, setInjectedProvider] = useState();
    const price = useExchangePrice(mainnetProvider);

    return (
        <div className='App'>
            <header>
                <a href='https://twitter.com/AlexMasmej'>
                    CONTROL MY LIFE via $ALEX
                </a>
                <div className='account'>
                    <Account
                        address={address}
                        setAddress={setAddress}
                        localProvider={localProvider}
                        injectedProvider={injectedProvider}
                        setInjectedProvider={setInjectedProvider}
                        mainnetProvider={mainnetProvider}
                        price={price}
                    />
                </div>
            </header>

            <div className='body-container'>
                <Vote
                    address={address}
                    injectedProvider={injectedProvider}
                    localProvider={localProvider}
                />
                <TimeReport mainnetProvider={mainnetProvider} />
                <div style={{ display: "none" }}>
                    <VoteReport />
                </div>
                <p>💰 Don't have any $ALEX token to vote? Get some here:</p>
            </div>

            <div className='uniswap-container'>
                <iframe
                    title='uniswap'
                    src='https://uniswap.exchange/swap?outputCurrency=0x8ba6dcc667d3ff64c1a2123ce72ff5f0199e5315&theme=light'
                    height='660px'
                    width='100%'
                    style={{
                        border: 0,
                        margin: "auto",
                        display: "block",
                        borderradius: 10,
                        maxwidth: "600px",
                        minwidth: "300px",
                    }}
                />
            </div>
        </div>
    );
}

export default App;
