import React, { useState } from 'react';
import { Badge } from './Badge';
import { BadgeVariant, BadgeMode } from '../types/types';

export const BadgeDemo: React.FC = () => {
  const [inputText, setInputText] = useState('Example Badge');
  const [variant, setVariant] = useState<BadgeVariant>('filled');
  const [mode, setMode] = useState<BadgeMode>('light');
  const [borderWidth, setBorderWidth] = useState(0.5);
  const [font, setFont] = useState('Inter');

  const examples = [
    'React', 'TypeScript', 'JavaScript', 'Vue.js', 'Angular',
    'Node.js', 'Python', 'Docker', 'Kubernetes', 'AWS',
    'Frontend', 'Backend', 'API', 'Database', 'UI/UX'
  ];

  const variants: BadgeVariant[] = ['filled', 'outline'];
  const fonts = ['Inter', 'Arial', 'Helvetica', 'system-ui', 'monospace'];

  const containerStyles: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff',
    color: mode === 'dark' ? '#ffffff' : '#000000',
    padding: '2rem',
    fontFamily: 'Inter, system-ui, sans-serif',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={containerStyles}>
      {/* Add Inter font import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');`}
      </style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Badge Generator Demo</h2>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            style={{
              padding: '8px 16px',
              backgroundColor: mode === 'dark' ? '#333' : '#f0f0f0',
              color: mode === 'dark' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Inter, system-ui'
            }}
          >
            {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>

        <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f9f9f9', borderRadius: '8px' }}>
          <h3>Interactive Demo</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Text</label>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter badge text..."
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  border: `1px solid ${mode === 'dark' ? '#444' : '#ccc'}`,
                  borderRadius: '4px',
                  backgroundColor: mode === 'dark' ? '#333' : '#fff',
                  color: mode === 'dark' ? '#fff' : '#000'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as BadgeVariant)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  border: `1px solid ${mode === 'dark' ? '#444' : '#ccc'}`,
                  borderRadius: '4px',
                  backgroundColor: mode === 'dark' ? '#333' : '#fff',
                  color: mode === 'dark' ? '#fff' : '#000'
                }}
              >
                {variants.map(v => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Border Width</label>
              <input
                type="number"
                value={borderWidth}
                onChange={(e) => setBorderWidth(parseFloat(e.target.value))}
                min="0"
                max="2"
                step="0.25"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  border: `1px solid ${mode === 'dark' ? '#444' : '#ccc'}`,
                  borderRadius: '4px',
                  backgroundColor: mode === 'dark' ? '#333' : '#fff',
                  color: mode === 'dark' ? '#fff' : '#000'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Font</label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '14px',
                  border: `1px solid ${mode === 'dark' ? '#444' : '#ccc'}`,
                  borderRadius: '4px',
                  backgroundColor: mode === 'dark' ? '#333' : '#fff',
                  color: mode === 'dark' ? '#fff' : '#000'
                }}
              >
                {fonts.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '14px' }}>Result:</span>
            <Badge
              text={inputText}
              variant={variant}
              mode={mode}
              font={font}
              borderWidth={borderWidth}
            />
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Variant Comparison</h3>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.7 }}>Filled (with background)</div>
              <Badge text="Filled" variant="filled" mode={mode} />
            </div>
            <div>
              <div style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.7 }}>Outline (no background)</div>
              <Badge text="Outline" variant="outline" mode={mode} />
            </div>
            <div>
              <div style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.7 }}>Ghost (no border)</div>
              <Badge text="Ghost" variant="outline" mode={mode} borderWidth={0} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Color Consistency Demo</h3>
          <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '1rem' }}>
            Same text always generates the same pastel colors
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {examples.map(example => (
              <Badge key={example} text={example} variant={variant} mode={mode} />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Clickable Badges</h3>
          <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '1rem' }}>
            Badges can be interactive
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Badge
              text="Click me!"
              variant="filled"
              mode={mode}
              onClick={() => alert('Filled badge clicked!')}
            />
            <Badge
              text="Or me!"
              variant="outline"
              mode={mode}
              onClick={() => alert('Outline badge clicked!')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};