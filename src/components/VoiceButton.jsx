// src/components/VoiceButton.jsx
import { useEffect, useRef, useState } from "react";
import { Mic } from "lucide-react";

const VoiceButton = ({ onCommand }) => {
  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check for speech recognition support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorMessage("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("Voice recognition started...");
      setListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      console.log("Heard:", transcript);

      if (transcript.includes("home")) onCommand("home");
      else if (transcript.includes("about")) onCommand("about");
      else if (transcript.includes("project")) onCommand("projects");
      else if (transcript.includes("contact")) onCommand("contact");
      else alert(`Sorry, I didn't understand: "${transcript}"`);
    };

    recognition.onerror = (e) => {
      console.error("Recognition error:", e);
      setErrorMessage("Voice recognition failed. Try again.");
    };

    recognition.onend = () => {
      console.log("Voice recognition stopped.");
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, [onCommand]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (listening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  return (
    <>
      {errorMessage && (
        <div className="fixed bottom-24 right-6 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
          {errorMessage}
        </div>
      )}

      <button
        onClick={toggleListening}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 border-2 transition-all duration-300
        ${listening
            ? "bg-cyan-500 border-white animate-pulse scale-110"
            : "bg-black hover:bg-cyan-600 border-cyan-400 hover:scale-105"
        }`}
        aria-label="Toggle voice control"
      >
        <Mic className="text-white w-6 h-6" />
      </button>
    </>
  );
};

export default VoiceButton;
