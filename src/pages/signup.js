import { Inter } from "next/font/google";
import Container from "../components/Sub-container";

const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  return (
    <Container
      title="SUBSCRIBE"
      text="Sign up with your email address to receive news and updates"
    />
  );
}

// const words = ["make", "shift", "progress", "push", "result"];

// words.map((word, index) => console.log(word));
