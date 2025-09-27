import React, { useState } from "react";
import { generateBadgeColors, generateBadgeStyles } from "./badgeUtils";

// Demo component showcasing the badge generator
const BadgeDemo: React.FC = () => {
  const [inputText, setInputText] = useState("React");
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [usePalette, setUsePalette] = useState(false);

  const colors = generateBadgeColors(inputText, { mode, usePalette });
  const styles = generateBadgeStyles(inputText, { mode, usePalette });

  const examples = [
    "React", "TypeScript", "JavaScript", "Vue.js", "Angular",
    "Node.js", "Python", "Docker", "Kubernetes", "AWS",
    "Frontend", "Backend", "API", "Database", "UI/UX"
  ];

  const containerStyle: React.CSSProperties = {
    padding: "2rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    backgroundColor: mode === "light" ? "#ffffff" : "#1a1a1a",
    color: mode === "light" ? "#1a1a1a" : "#ffffff",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  const badgeStyle: React.CSSProperties = {
    ...styles,
    padding: "8px 16px",
    borderRadius: "6px",
    border: `1px solid ${colors.border}`,
    fontWeight: 500,
    fontSize: "1rem",
    display: "inline-block",
    margin: "0.5rem",
  };

  const inputStyle: React.CSSProperties = {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: mode === "light" ? "1px solid #ddd" : "1px solid #555",
    backgroundColor: mode === "light" ? "#ffffff" : "#2a2a2a",
    color: mode === "light" ? "#1a1a1a" : "#ffffff",
    width: "300px",
    marginRight: "1rem",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "12px 24px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: mode === "light" ? "#007bff" : "#0056b3",
    color: "#ffffff",
    cursor: "pointer",
    margin: "0.5rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        🎨 Badge Color Generator Demo
      </h1>

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text for badge..."
            style={inputStyle}
          />
        </div>
        
        <div style={{ marginBottom: "1rem" }}>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            style={buttonStyle}
          >
            Switch to {mode === "light" ? "Dark" : "Light"} Mode
          </button>
          
          <button
            onClick={() => setUsePalette(!usePalette)}
            style={buttonStyle}
          >
            {usePalette ? "Use Hash Colors" : "Use Palette Colors"}
          </button>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h3>Your Badge:</h3>
          <span style={badgeStyle}>{inputText || "Type something..."}</span>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h4>Generated Colors:</h4>
          <div style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>
            <div>Background: {colors.background}</div>
            <div>Border: {colors.border}</div>
            <div>Text: {colors.text}</div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <h3>Example Badges:</h3>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {examples.map((example) => {
            const exampleColors = generateBadgeColors(example, { mode, usePalette });
            const exampleStyles = generateBadgeStyles(example, { mode, usePalette });
            
            return (
              <span
                key={example}
                style={{
                  ...exampleStyles,
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: `1px solid ${exampleColors.border}`,
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  display: "inline-block",
                  margin: "0.25rem",
                  cursor: "pointer",
                }}
                onClick={() => setInputText(example)}
              >
                {example}
              </span>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.9rem", opacity: 0.7 }}>
        <p>
          This demo showcases automatic color generation for badges.
          Each string consistently generates the same colors across sessions.
        </p>
        <p>
          Click any example badge to test it, or type your own text above.
        </p>
      </div>
    </div>
  );
};

export default BadgeDemo;