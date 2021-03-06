import Banner from "components/banner";
import CoreTeam from "components/core-team";
import Ecosystem from "components/ecosystem";
import Features from "components/features";
import Footer from "components/footer";
import Heros from "components/heros";
import Introduction from "components/introduction";
import Partner from "components/partner";
import RoadMap from "components/road-map";
import TokenMetrics from "components/token-metrics";
import { NextPage } from "next";
import Head from "next/head";

import Header from "../components/header";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Gun Hunter NFT</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional" rel="stylesheet" />
            </Head>
            <Header />
            <Banner />
            <Introduction />
            <Ecosystem />
            <Features />
            <Heros />
            <RoadMap />
            <TokenMetrics />
            <CoreTeam />
            <Partner />
            <Footer />
        </div>
    );
};

export default Home;
