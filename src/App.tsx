// @ts-nocheck
import Layout from "./components/Layout";
import Info from "./components/Info";
import Device from "./components/Device";
import { useState, useEffect } from "react";

export default function App() {
  const [onMobile, setOnMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOnMobile(true);
    }
  }, []);

  return (
    <Layout>
      <Info onMobile={onMobile} />
      <Device onMobile={onMobile} />
    </Layout>
  );
}
