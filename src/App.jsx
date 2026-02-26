import { AudioProvider } from "./audio/AudioProvider";
import MapScene from "./MapScene";

export default function App() {
  return (
    <AudioProvider>
      <MapScene />
    </AudioProvider>
  );
}