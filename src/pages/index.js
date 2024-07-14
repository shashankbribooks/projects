import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          src="./assets/images/bagckround image.svg"
          layout="fill"
          alt="background image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}  >
          <div>
            <Link href="/bripublish" className={`${styles.btn}`}>
              <h2>Bri Publish</h2>
            </Link>
          </div>
          <div>
            <Link href="/Inter-generational" className={`${styles.btn}`}>
              <h2>Inter-generational</h2>
            </Link>
          </div>
          <div>
            <Link href="/festival-website" className={`${styles.btn}`}>
              <h2>Festival</h2>
            </Link>
          </div>
          <div>
            <Link
              href="https://itsimtiyazkhan.github.io/work/"
              className={`${styles.btn}`}
            >
              <h2>Bri Store</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
