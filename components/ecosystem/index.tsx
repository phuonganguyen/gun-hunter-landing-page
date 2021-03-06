import Title from "components/title";
import Link from "next/link";
import React from "react";
import { Container, Row } from "reactstrap";

import Styles from "./ecosystem.module.css";

export default function Ecosystem() {
    return (
        <section id="ecosystem" className={Styles.ecosystem}>
            <Container>
                <Row className={Styles.ecosystemContain}>
                    <Title text="GunHunter Ecosystem" />
                    <div className={Styles.description}>
                        <p>
                            GunHunter is an NFT game ecosystem that intends to create a Universe of Fighting between players on Binance
                            Smart Chains, Polygon, Solana, Polkadot, ...where millions of players from all over the world may participate in
                            NFT gaming blockchain in a simple, fast, and exciting way.
                        </p>
                        <p>
                            GunHunter will become one of the most popular metaverses for players all over the world to compete in,
                            eventually forming an e-sports
                            <Link href="https://docs.gunhunternft.net/ii-gunhunter-ecosystem">
                                <a target="_blank">
                                    <span className={Styles['read-more']}>...Read more</span>
                                </a>
                            </Link>
                        </p>
                    </div>

                    <div className={Styles.videoContainer}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/nltaVaFLFps"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
