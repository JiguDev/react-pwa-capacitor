import { useEffect, useState } from "react";
import { Device } from "@capacitor/device";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const logDeviceInfo = async () => {
  const info = await Device.getInfo();
  console.log("Device Info:", info);
  return info;
};

function App() {
  const [count, setCount] = useState(0);
  const [deviceInfo, setDeviceInfo] = useState<any>(null);

  useEffect(() => {
    logDeviceInfo().then((info) => setDeviceInfo(info));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Capacitor</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {deviceInfo && (
        <div className="device-info">
          <h2>Device Information:</h2>
          <pre>{JSON.stringify(deviceInfo, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
