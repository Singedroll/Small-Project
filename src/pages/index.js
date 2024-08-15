import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "../components/Sub-container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container
      title="SUBSCRIBE"
      text="Sign up with your email address to receive news and updates"
    />
  );
}
