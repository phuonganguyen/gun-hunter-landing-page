import React from 'react';
import { Container, Row } from 'reactstrap';
import Image from 'next/image';

import Title from '../title';
import Styles from './token-metrics.module.css';

export default function TokenMetrics() {
  return (
    <section id="token-metrics" className={Styles['token-metrics']}>
      <Container>
        <Row className="d-flex flex-column align-items-center">
          <Title text="Token Metrics" />
          <Image src={require('public/images/token-metrics.png')} alt="token" />
        </Row>
        <Row className="d-flex flex-column align-items-center">
          <ul className={Styles.tokenInfo}>
            <li>
              Smartcontract Address: <b>0x104A94356aDCf35c320D8F16958E7bB347a987ff</b>
            </li>
            <li>
              Name: <b>GunHunter NFT</b>
            </li>
            <li>Symbol: GHTTotal</li>
            <li>Supply : 1,000,000,000</li>
            <li>
              Decimals: <b>9</b>
            </li>
            <li>
              Network: <b>Binance Smart Chain</b>
            </li>
            <li>
              Slippage:
              <ol>
                <li>
                  <b>{`Buy: > 0%`}</b>
                </li>
                <li>
                  <b>{`Sell: > 5%`}</b>
                </li>
              </ol>
            </li>
          </ul>
        </Row>
      </Container>
    </section>
  );
}
