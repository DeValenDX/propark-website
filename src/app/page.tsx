import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Propark</h1>
      <Image src="/logo.png" alt="Propark Logo" width={200} height={200} />
    </main>
  );
}
