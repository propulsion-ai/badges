import React, { useState } from "react";
import Badge from "./Badge";
import { ThemeMode } from "./types";

const SAMPLE_LABELS = [
  "React", "TypeScript", "JavaScript", "Node.js", "Python",
  "Frontend", "Backend", "API", "Database", "UI/UX",
  "Performance", "Security", "Testing", "DevOps", "Mobile"
];

const App: React.FC = () => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = (): void => {
    setMode(prev => prev === "light" ? "dark" : "light");
  };

  const themeStyles = {
    light: {
      backgroundColor: "#ffffff",
      color: "#1a1a1a",
      button: {
        backgroundColor: "#f8f9fa",
        color: "#1a1a1a",
        border: "#dee2e6",
        hover: "#e9ecef"
      }
    },
    dark: {
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      button: {
        backgroundColor: "#343a40",
        color: "#ffffff",
        border: "#495057",
        hover: "#495057"
      }
    }
  };

  const currentTheme = themeStyles[mode];

  const containerStyles: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: currentTheme.backgroundColor,
    color: currentTheme.color,
    padding: "2rem",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const headerStyles: React.CSSProperties = {
    marginBottom: "2rem",
    textAlign: "center",
  };

  const buttonStyles: React.CSSProperties = {
    backgroundColor: currentTheme.button.backgroundColor,
    color: currentTheme.button.color,
    border: `1px solid ${currentTheme.button.border}`,
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginBottom: "1rem",
  };

  const badgeContainerStyles: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    justifyContent: "center",
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyles}>
      <header style={headerStyles}>
        <h1 style={{ margin: "0 0 1rem 0", fontSize: "2.5rem" }}>
          Badge Generator
        </h1>
        <p style={{ margin: "0 0 2rem 0", fontSize: "1.125rem", opacity: 0.8 }}>
          Automatic color generation for any string
        </p>
        
        <button
          style={buttonStyles}
          onClick={toggleMode}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = currentTheme.button.hover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = currentTheme.button.backgroundColor;
          }}
        >
          Switch to {mode === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <main>
        <div style={badgeContainerStyles}>
          {SAMPLE_LABELS.map((label) => (
            <Badge 
              key={label} 
              label={label} 
              mode={mode}
              onClick={() => console.log(`Clicked: ${label}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;