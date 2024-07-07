import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faStop } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [recording, setRecording] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) =>
        setAudioChunks((prev) => [...prev, e.data]);
      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (err) {
      console.error("Error accessing the microphone", err);
    }
  };

  const stopRecording = () => {
    if (!mediaRecorder) {
      return;
    }

    mediaRecorder.stop();
    setRecording(false);
    // Handle the recorded audio as needed, e.g., create a Blob for playback or download
    const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
    // Reset the audio chunks state for the next recording
    setAudioChunks([]);
  };

  return (
    <div className="bg-gray-200 flex flex-col p-8 m-8 rounded-lg">
      <h1 className="text-4xl font-bold text-center">OX</h1>
      <p className="mt-4 text-center">The GenAI voice-assistant.</p>
      <p className="mt-4 text-center">
        Ask whatever you want and let OX answer!
      </p>

      <div className="flex flex-col mt-4 justify-center">
        <Textarea size="lg" color="default" className="mb-4"></Textarea>
        {recording ? (
          <div className="flex my-4 justify-center items-center">
            <Spinner size="lg" />
            <p className="ml-4 font-bold">transcribing</p>
          </div>
        ) : null}
        <div className="flex justify-center" style={{ width: "100%" }}>
          {recording ? (
            <Button size="lg" color="primary" onClick={stopRecording}>
              <FontAwesomeIcon icon={faStop} />
              Stop
            </Button>
          ) : (
            <Button size="lg" color="primary" onClick={startRecording}>
              <FontAwesomeIcon icon={faMicrophone} />
              Record
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
