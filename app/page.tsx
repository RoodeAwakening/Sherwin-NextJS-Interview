import { notFound } from "next/navigation";

export default function Home() {
  if (Math.random() < 0.5) {
    notFound();
  }
  return <>Date: {new Date().toLocaleString("en-US")}</>;
}

export const revalidate = 10;
