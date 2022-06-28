import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import flowers from '../public/flowers.jpg';
import Image from 'next/image';

const weddingDate = new Date(2022, 5, 30, 17);
const diff = () => weddingDate.getTime() - new Date().getTime();

const Home: NextPage = () => {
  const [days, setDays] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [married, setMarried] = useState(false);

  useEffect(() => {
    const ms = diff();
    let interval: NodeJS.Timer;
    if (ms < 0) {
      setMarried(true);
    } else {
      interval = setInterval(() => {
        const ms = diff();

        if (ms < 0) {
          setMarried(true);
        }

        const d = Math.floor(ms / 1000 / 60 / 60 / 24);
        setDays(d);

        const hr = Math.floor(ms / 1000 / 60 / 60) % 24;
        setHours(hr);

        const min = Math.floor(ms / 1000 / 60) % 60;
        setMinutes(min);

        const sec = Math.floor(ms / 1000) % 60;
        setSeconds(sec);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          display: 'block',
          zIndex: 0,
        }}
      >
        <Image
          src={flowers}
          layout='fill'
          objectFit='cover'
          alt='background iamge with leafs'
        />
      </div>

      <Head>
        <title>Ślub countdown</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          {married ? (
            <div>Już po ślubie!!! 🤵🏻👰🏼‍♀️🎉🎉🎉</div>
          ) : (
            <>
              <div>Ślub za</div>
              <div>{days} dni</div>
              <div>{hours} godzin</div>
              <div>{minutes} minut</div>
              <div>{seconds} sekund</div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
