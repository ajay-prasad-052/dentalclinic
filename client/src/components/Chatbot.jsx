import { useState } from "react";

const quickReplies = [
  "I want to book a consultation",
  "What treatments do you offer?",
  "Do you provide emergency care?",
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I can help with appointments, treatments, and clinic information.",
    },
  ]);

  const handleReply = (text) => {
    const botReply = {
      from: "bot",
      text: text.toLowerCase().includes("book")
        ? "You can book an appointment using the appointment form on our site."
        : text.toLowerCase().includes("treatment")
          ? "We offer cosmetic dentistry, implants, aligners, family care, and more."
          : "Yes, we provide same-day emergency dental care for urgent needs.",
    };

    setMessages((prev) => [...prev, { from: "user", text }, botReply]);
  };

  return (
    <div className="chatbot-wrap">
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <strong>Clinic Assistant</strong>
            <button type="button" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={`${message.text}-${index}`}
                className={`chat-message ${message.from}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="chatbot-options">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                onClick={() => handleReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Chat"}
      </button>
    </div>
  );
};

export default Chatbot;
