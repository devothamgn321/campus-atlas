import React, { useRef, useState } from "react";
import { Sparkles, Send, BookOpen, AlertTriangle, Bot, User } from "lucide-react";

// Canned knowledge base for the Copilot demo. In production this maps to
// docs/architecture/System-Architecture.md's "AI Copilot Future Design":
// RAG over a campus knowledge base + policy docs + academic calendar,
// with confidence-based escalation to a human department.
const RESPONSES = [
  {
    keywords: ["library", "fine", "fines", "overdue"],
    answer:
      "You can view and pay library fines under My Account → Fines & Fees. Overdue items accrue $0.25/day, capped at $15 per item.",
    source: "Library Services Knowledge Base",
    confidence: 96
  },
  {
    keywords: ["financial aid", "disburse", "disbursement", "aid"],
    answer:
      "Financial aid for the Fall term disburses 10 days before classes start, as long as all verification documents are submitted by August 1.",
    source: "Registrar Academic Calendar",
    confidence: 94
  },
  {
    keywords: ["student id", "id card", "replace", "lost id"],
    answer:
      "Replacement student IDs are issued at Campus ID Services (Student Union, Room 102) for a $15 fee. Bring a government-issued photo ID.",
    source: "Campus ID Services Guide",
    confidence: 91
  },
  {
    keywords: ["drop", "add/drop", "deadline", "withdraw"],
    answer:
      "Late add/drop requests after the published deadline require instructor and department approval, and the policy varies by course and college.",
    source: null,
    confidence: 58,
    escalateTo: "Registrar's Office — Academic Petitions"
  }
];

const FALLBACK_RESPONSE = {
  answer:
    "I don't have verified campus information on that yet. I've routed this to a team member who can help.",
  source: null,
  confidence: 42,
  escalateTo: "General Student Services"
};

const SUGGESTED_PROMPTS = [
  "How do I check my library fines?",
  "When does financial aid disburse this semester?",
  "I missed the add/drop deadline — what are my options?",
  "Where do I replace a lost student ID?"
];

function matchResponse(query) {
  const normalized = query.toLowerCase();
  const hit = RESPONSES.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword))
  );
  return hit ?? FALLBACK_RESPONSE;
}

function ticketId() {
  return `CMP-${Math.floor(1000 + Math.random() * 9000)}`;
}

export default function CopilotDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      answer:
        "Hi, I'm the CampusOS Copilot demo. Ask about library fines, financial aid, IDs, or course drops — or try your own question to see how I handle uncertainty.",
      source: null,
      confidence: null
    }
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef(null);

  function ask(query) {
    const trimmed = query.trim();
    if (!trimmed || isThinking) return;

    setMessages((prev) => [...prev, { role: "user", answer: trimmed }]);
    setInput("");
    setIsThinking(true);

    window.setTimeout(() => {
      const match = matchResponse(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          answer: match.answer,
          source: match.source,
          confidence: match.confidence,
          escalateTo: match.escalateTo,
          ticket: match.escalateTo ? ticketId() : null
        }
      ]);
      setIsThinking(false);
      window.requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      });
    }, 600);
  }

  return (
    <section id="copilot" className="section copilot">
      <p className="eyebrow">AI Campus Copilot — Live Demo</p>
      <h2>See the AI Copilot's UX contract in action</h2>
      <p className="sectionText">
        This is a scripted demo, not a connected LLM — it exists to show the product decisions
        that matter for a campus AI assistant: source citations on confident answers, and visible
        escalation when confidence is low, per the{" "}
        <a href="#" onClick={(event) => event.preventDefault()}>
          RAG + guardrails design
        </a>{" "}
        in the architecture docs.
      </p>

      <div className="copilotShell">
        <div className="copilotThread" ref={scrollRef}>
          {messages.map((message, index) => (
            <div className={`bubbleRow ${message.role}`} key={index}>
              <div className="avatar">
                {message.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className="bubble">
                <p>{message.answer}</p>
                {message.source && (
                  <span className="citationChip">
                    <BookOpen size={12} /> Source: {message.source}
                  </span>
                )}
                {message.escalateTo && (
                  <span className="escalationChip">
                    <AlertTriangle size={12} /> {message.confidence}% confidence — escalated to{" "}
                    {message.escalateTo} ({message.ticket})
                  </span>
                )}
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="bubbleRow assistant">
              <div className="avatar"><Bot size={16} /></div>
              <div className="bubble thinking">
                <Sparkles size={14} /> Thinking…
              </div>
            </div>
          )}
        </div>

        <div className="suggestedPrompts">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button key={prompt} type="button" onClick={() => ask(prompt)} disabled={isThinking}>
              {prompt}
            </button>
          ))}
        </div>

        <form
          className="copilotInput"
          onSubmit={(event) => {
            event.preventDefault();
            ask(input);
          }}
        >
          <input
            type="text"
            placeholder="Ask about a campus service, deadline, or policy…"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={isThinking}
          />
          <button type="submit" disabled={isThinking || !input.trim()} aria-label="Send">
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
