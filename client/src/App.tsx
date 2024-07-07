import { Button, Input, Textarea } from "@nextui-org/react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="bg-gray-200 flex flex-col p-8 m-8 rounded-lg">
      <h1 className="text-4xl font-bold text-center">OX</h1>
      <p className="mt-4 text-center">The GenAI voice-assistant.</p>
      <p className="mt-4 text-center">
        Ask whatever you want and let OX answer!
      </p>

      <div className="flex flex-col mt-4 justify-center">
        <Textarea size="lg" color="default" className="mb-4"></Textarea>
        <div className="flex justify-center" style={{ width: "100%" }}>
          <Button size="lg" color="primary">
            <FontAwesomeIcon icon={faMicrophone} />
            Record
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
