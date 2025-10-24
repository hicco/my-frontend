"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_API_BASE!;
    fetch(`${base}/health`)
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setError(e.toString()));
  }, []);

  return (
    <main style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1>Next.js + FastAPI</h1>
      {error && <p style={{ color: "crimson" }}>Erro: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>A carregar…</p>}
    </main>
  );
}
