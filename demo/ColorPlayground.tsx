import React, { useState } from 'react';
import { Badge } from '../src/components/Badge';
import { generatePastelColors } from '../src/utils/colorMapper';
import { getColorFromText } from '../src/utils/colorMapper';

export function ColorPlayground() {
  const [sampleText, setSampleText] = useState('Example Badge');
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Light mode parameters
  const [lightSaturation, setLightSaturation] = useState(0.4);
  const [lightLightness, setLightLightness] = useState(0.94);
  const [lightBorderSat, setLightBorderSat] = useState(0.5);
  const [lightBorderLight, setLightBorderLight] = useState(0.85);
  const [lightTextSat, setLightTextSat] = useState(0.9);
  const [lightTextLight, setLightTextLight] = useState(0.35);

  // Dark mode parameters
  const [darkSaturation, setDarkSaturation] = useState(0.3);
  const [darkLightness, setDarkLightness] = useState(0.15);
  const [darkBorderSat, setDarkBorderSat] = useState(0.4);
  const [darkBorderLight, setDarkBorderLight] = useState(0.25);
  const [darkTextSat, setDarkTextSat] = useState(0.5);
  const [darkTextLight, setDarkTextLight] = useState(0.75);

  const baseColor = getColorFromText(sampleText);

  // Custom color generation for preview
  const getCustomColors = () => {
    const hex2hsl = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const l = (max + min) / 2;
      let s = 0;
      let h = 0;

      if (max !== min) {
        s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
        switch (max) {
          case r: h = ((g - b) / (max - min) + (g < b ? 6 : 0)) / 6; break;
          case g: h = ((b - r) / (max - min) + 2) / 6; break;
          case b: h = ((r - g) / (max - min) + 4) / 6; break;
        }
      }

      return { h: h * 360, s, l };
    };

    const hsl2hex = (h: number, s: number, l: number) => {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const r = hue2rgb(p, q, h / 360 + 1/3);
      const g = hue2rgb(p, q, h / 360);
      const b = hue2rgb(p, q, h / 360 - 1/3);

      return '#' + [r, g, b].map(x => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');
    };

    const hsl = hex2hsl(baseColor);

    if (mode === 'light') {
      return {
        backgroundColor: hsl2hex(hsl.h, lightSaturation, lightLightness),
        borderColor: hsl2hex(hsl.h, lightBorderSat, lightBorderLight),
        textColor: hsl2hex(hsl.h, lightTextSat, lightTextLight)
      };
    } else {
      return {
        backgroundColor: hsl2hex(hsl.h, darkSaturation, darkLightness),
        borderColor: hsl2hex(hsl.h, darkBorderSat, darkBorderLight),
        textColor: hsl2hex(hsl.h, darkTextSat, darkTextLight)
      };
    }
  };

  const colors = getCustomColors();
  const samples = ['New', 'In Progress', 'Completed', 'Bug', 'Feature', 'Documentation', 'High Priority', 'Review'];

  return (
    <div style={{
      padding: '20px',
      backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff',
      color: mode === 'dark' ? '#ffffff' : '#000000',
      minHeight: '100vh'
    }}>
      <h2>🎨 Color Playground</h2>
      <p>Adjust the color parameters to find your perfect pastel palette</p>

      <div style={{ marginBottom: '30px' }}>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          style={{
            padding: '8px 16px',
            backgroundColor: mode === 'dark' ? '#333' : '#f0f0f0',
            color: mode === 'dark' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '1200px' }}>
        <div>
          <h3>Adjust Parameters</h3>

          <div style={{ marginBottom: '20px' }}>
            <label>Sample Text:</label>
            <input
              type="text"
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: mode === 'dark' ? '#333' : '#fff',
                color: mode === 'dark' ? '#fff' : '#000'
              }}
            />
          </div>

          {mode === 'light' ? (
            <>
              <h4>Light Mode Settings</h4>

              <div style={{ marginBottom: '15px' }}>
                <label>Background Saturation: {lightSaturation.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={lightSaturation}
                  onChange={(e) => setLightSaturation(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Background Lightness: {lightLightness.toFixed(2)}</label>
                <input
                  type="range"
                  min="0.8"
                  max="1"
                  step="0.01"
                  value={lightLightness}
                  onChange={(e) => setLightLightness(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Border Saturation: {lightBorderSat.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={lightBorderSat}
                  onChange={(e) => setLightBorderSat(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Border Lightness: {lightBorderLight.toFixed(2)}</label>
                <input
                  type="range"
                  min="0.5"
                  max="1"
                  step="0.01"
                  value={lightBorderLight}
                  onChange={(e) => setLightBorderLight(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Text Saturation: {lightTextSat.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={lightTextSat}
                  onChange={(e) => setLightTextSat(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Text Lightness: {lightTextLight.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  value={lightTextLight}
                  onChange={(e) => setLightTextLight(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>
            </>
          ) : (
            <>
              <h4>Dark Mode Settings</h4>

              <div style={{ marginBottom: '15px' }}>
                <label>Background Saturation: {darkSaturation.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={darkSaturation}
                  onChange={(e) => setDarkSaturation(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Background Lightness: {darkLightness.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="0.3"
                  step="0.01"
                  value={darkLightness}
                  onChange={(e) => setDarkLightness(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Border Saturation: {darkBorderSat.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={darkBorderSat}
                  onChange={(e) => setDarkBorderSat(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Border Lightness: {darkBorderLight.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="0.5"
                  step="0.01"
                  value={darkBorderLight}
                  onChange={(e) => setDarkBorderLight(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Text Saturation: {darkTextSat.toFixed(2)}</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={darkTextSat}
                  onChange={(e) => setDarkTextSat(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label>Text Lightness: {darkTextLight.toFixed(2)}</label>
                <input
                  type="range"
                  min="0.5"
                  max="1"
                  step="0.01"
                  value={darkTextLight}
                  onChange={(e) => setDarkTextLight(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>
            </>
          )}
        </div>

        <div>
          <h3>Live Preview</h3>

          <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5', borderRadius: '8px' }}>
            <h4>Custom Badge</h4>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <span style={{
                display: 'inline-flex',
                padding: '2px 5px',
                borderRadius: '5px',
                backgroundColor: colors.backgroundColor,
                border: `0.5px solid ${colors.borderColor}`,
                color: colors.textColor,
                fontSize: '12px',
                lineHeight: '15px'
              }}>
                {sampleText} (Filled)
              </span>

              <span style={{
                display: 'inline-flex',
                padding: '2px 5px',
                borderRadius: '5px',
                backgroundColor: 'transparent',
                border: `0.5px solid ${colors.borderColor}`,
                color: colors.textColor,
                fontSize: '12px',
                lineHeight: '15px'
              }}>
                {sampleText} (Outline)
              </span>
            </div>

            <h4>Color Values</h4>
            <div style={{ fontFamily: 'monospace', fontSize: '12px' }}>
              <div>Background: {colors.backgroundColor}</div>
              <div>Border: {colors.borderColor}</div>
              <div>Text: {colors.textColor}</div>
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h4>Sample Badges</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {samples.map(text => {
                const sampleBase = getColorFromText(text);
                const sampleHsl = hex2hsl(sampleBase);
                const sampleColors = mode === 'light' ? {
                  backgroundColor: hsl2hex(sampleHsl.h, lightSaturation, lightLightness),
                  borderColor: hsl2hex(sampleHsl.h, lightBorderSat, lightBorderLight),
                  textColor: hsl2hex(sampleHsl.h, lightTextSat, lightTextLight)
                } : {
                  backgroundColor: hsl2hex(sampleHsl.h, darkSaturation, darkLightness),
                  borderColor: hsl2hex(sampleHsl.h, darkBorderSat, darkBorderLight),
                  textColor: hsl2hex(sampleHsl.h, darkTextSat, darkTextLight)
                };

                return (
                  <span key={text} style={{
                    display: 'inline-flex',
                    padding: '2px 5px',
                    borderRadius: '5px',
                    backgroundColor: sampleColors.backgroundColor,
                    border: `0.5px solid ${sampleColors.borderColor}`,
                    color: sampleColors.textColor,
                    fontSize: '12px',
                    lineHeight: '15px'
                  }}>
                    {text}
                  </span>
                );
              })}
            </div>
          </div>

          <div style={{ padding: '15px', backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f0f0f0', borderRadius: '8px' }}>
            <h4>Export Settings</h4>
            <pre style={{ fontSize: '11px', overflow: 'auto' }}>
{mode === 'light' ? `// Light Mode
backgroundColor: hsl(h, ${lightSaturation}, ${lightLightness})
borderColor: hsl(h, ${lightBorderSat}, ${lightBorderLight})
textColor: hsl(h, ${lightTextSat}, ${lightTextLight})` :
`// Dark Mode
backgroundColor: hsl(h, ${darkSaturation}, ${darkLightness})
borderColor: hsl(h, ${darkBorderSat}, ${darkBorderLight})
textColor: hsl(h, ${darkTextSat}, ${darkTextLight})`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  function hex2hsl(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let s = 0;
    let h = 0;

    if (max !== min) {
      s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
      switch (max) {
        case r: h = ((g - b) / (max - min) + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / (max - min) + 2) / 6; break;
        case b: h = ((r - g) / (max - min) + 4) / 6; break;
      }
    }

    return { h: h * 360, s, l };
  }

  function hsl2hex(h: number, s: number, l: number) {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h / 360 + 1/3);
    const g = hue2rgb(p, q, h / 360);
    const b = hue2rgb(p, q, h / 360 - 1/3);

    return '#' + [r, g, b].map(x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }
}