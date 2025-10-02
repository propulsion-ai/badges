import React, { useState } from 'react';
import { Badge } from './Badge';
import { BadgeVariant, BadgeMode } from '../types/types';
import { X } from '@phosphor-icons/react';

export const BadgeDemo: React.FC = () => {
  const [inputText, setInputText] = useState('Example Badge');
  const [variant, setVariant] = useState<BadgeVariant>('filled');
  const [mode, setMode] = useState<BadgeMode>('light');
  const [borderWidth, setBorderWidth] = useState(0.5);
  const [font, setFont] = useState('Inter');
  const [fontSize, setFontSize] = useState('12px');
  const [fontWeight, setFontWeight] = useState('400');

  const examples = [
    'React', 'TypeScript', 'JavaScript', 'Vue.js', 'Angular',
    'Node.js', 'Python', 'Docker', 'Kubernetes', 'AWS',
    'Frontend', 'Backend', 'API', 'Database', 'UI/UX'
  ];

  const variants: BadgeVariant[] = ['filled', 'outline', 'ghost'];
  const fonts = ['Inter', 'JetBrains Mono', 'Roboto', 'Arial', 'Helvetica', 'system-ui', 'monospace'];
  const fontSizes = ['10px', '11px', '12px', '13px', '14px', '16px', '18px', '20px'];
  const fontWeights = ['300', '400', '500', '600', '700', '800', '900'];

  const containerStyles: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff',
    color: mode === 'dark' ? '#ffffff' : '#000000',
    padding: '2rem',
    fontFamily: 'Inter, system-ui, sans-serif',
    transition: 'background-color 0.3s ease'
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    fontSize: '14px',
    border: `1px solid ${mode === 'dark' ? '#444' : '#ddd'}`,
    borderRadius: '6px',
    backgroundColor: mode === 'dark' ? '#2a2a2a' : '#fff',
    color: mode === 'dark' ? '#fff' : '#000',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
    fontFamily: 'Inter, system-ui'
  };

  const labelStyles: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '13px',
    fontWeight: 500,
    color: mode === 'dark' ? '#ccc' : '#555',
    letterSpacing: '0.2px'
  };

  return (
    <div style={containerStyles}>
      {/* Add Inter font import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');`}
      </style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '28px', margin: 0 }}>Badge Generator Demo</h2>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            style={{
              padding: '10px 20px',
              backgroundColor: mode === 'dark' ? '#333' : '#f0f0f0',
              color: mode === 'dark' ? '#fff' : '#000',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Inter, system-ui',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>

        {/* Interactive Controls */}
        <div style={{
          marginBottom: '3rem',
          padding: '2rem',
          backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f9f9f9',
          borderRadius: '12px',
          border: `1px solid ${mode === 'dark' ? '#333' : '#e5e5e5'}`
        }}>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '18px' }}>Interactive Controls</h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div>
              <label style={labelStyles}>Text Content</label>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter badge text..."
                style={inputStyles}
              />
            </div>

            <div>
              <label style={labelStyles}>Variant</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as BadgeVariant)}
                style={{
                  ...inputStyles,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${mode === 'dark' ? '%23999' : '%23666'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px'
                }}
              >
                {variants.map(v => (
                  <option key={v} value={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyles}>Border Width (px)</label>
              <input
                type="number"
                value={borderWidth}
                onChange={(e) => setBorderWidth(parseFloat(e.target.value))}
                min="0"
                max="2"
                step="0.25"
                style={inputStyles}
              />
            </div>

            <div>
              <label style={labelStyles}>Font Family</label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                style={{
                  ...inputStyles,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${mode === 'dark' ? '%23999' : '%23666'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px'
                }}
              >
                {fonts.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyles}>Font Size</label>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                style={{
                  ...inputStyles,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${mode === 'dark' ? '%23999' : '%23666'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px'
                }}
              >
                {fontSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={labelStyles}>Font Weight</label>
              <select
                value={fontWeight}
                onChange={(e) => setFontWeight(e.target.value)}
                style={{
                  ...inputStyles,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${mode === 'dark' ? '%23999' : '%23666'}' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px'
                }}
              >
                {fontWeights.map(weight => (
                  <option key={weight} value={weight}>
                    {weight === '300' ? '300 (Light)' :
                     weight === '400' ? '400 (Regular)' :
                     weight === '500' ? '500 (Medium)' :
                     weight === '600' ? '600 (SemiBold)' :
                     weight === '700' ? '700 (Bold)' :
                     weight === '800' ? '800 (ExtraBold)' :
                     weight === '900' ? '900 (Black)' :
                     weight}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: mode === 'dark' ? '#1a1a1a' : '#fff',
            borderRadius: '8px',
            border: `1px solid ${mode === 'dark' ? '#3a3a3a' : '#e5e5e5'}`
          }}>
            <span style={{ fontSize: '14px', fontWeight: 500, color: mode === 'dark' ? '#999' : '#666' }}>Preview:</span>
            <Badge
              text={inputText}
              variant={variant}
              mode={mode}
              font={font}
              fontSize={fontSize}
              fontWeight={fontWeight}
              borderWidth={borderWidth}
            />
          </div>
        </div>

        {/* Variant Comparison */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '1.5rem' }}>Variant Comparison</h3>
          <div style={{
            display: 'flex',
            gap: '3rem',
            padding: '1.5rem',
            backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f9f9f9',
            borderRadius: '8px'
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', marginBottom: '10px', color: mode === 'dark' ? '#999' : '#666', fontWeight: 500 }}>
                Filled (with background)
              </div>
              <Badge text="Filled" variant="filled" mode={mode} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', marginBottom: '10px', color: mode === 'dark' ? '#999' : '#666', fontWeight: 500 }}>
                Outline (transparent)
              </div>
              <Badge text="Outline" variant="outline" mode={mode} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', marginBottom: '10px', color: mode === 'dark' ? '#999' : '#666', fontWeight: 500 }}>
                Ghost (no border)
              </div>
              <Badge text="Ghost" variant="outline" mode={mode} borderWidth={0} />
            </div>
          </div>
        </div>

        {/* Color Consistency */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>Color Consistency</h3>
          <p style={{ fontSize: '14px', color: mode === 'dark' ? '#999' : '#666', marginBottom: '1.5rem' }}>
            Same text always generates the same pastel colors
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '1.5rem',
            backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f9f9f9',
            borderRadius: '8px'
          }}>
            {examples.map(example => (
              <Badge key={example} text={example} variant={variant} mode={mode} />
            ))}
          </div>
        </div>

        {/* Border Width Examples */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>Border Width Variations</h3>
          <div style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            padding: '1.5rem',
            backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f9f9f9',
            borderRadius: '8px'
          }}>
            <Badge text="0px" variant="filled" mode={mode} borderWidth={0} />
            <Badge text="0.25px" variant="filled" mode={mode} borderWidth={0.25} />
            <Badge text="0.5px" variant="filled" mode={mode} borderWidth={0.5} />
            <Badge text="0.75px" variant="filled" mode={mode} borderWidth={0.75} />
            <Badge text="1px" variant="filled" mode={mode} borderWidth={1} />
          </div>
        </div>

        {/* Interactive Examples */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>Interactive Badges</h3>
          <p style={{ fontSize: '14px', color: mode === 'dark' ? '#999' : '#666', marginBottom: '1.5rem' }}>
            Click these badges to see them in action
          </p>
          <div style={{
            display: 'flex',
            gap: '12px',
            padding: '1.5rem',
            backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f9f9f9',
            borderRadius: '8px'
          }}>
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
            <Badge
              text="Me too!"
              variant="outline"
              mode={mode}
              borderWidth={0}
              onClick={() => alert('Ghost badge clicked!')}
            />
          </div>
        </div>

        {/* Removable Badges */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>Removable Badges</h3>
          <p style={{ fontSize: '14px', color: mode === 'dark' ? '#999' : '#666', marginBottom: '1.5rem' }}>
            Badges with close functionality - default X icon or custom icons
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '1.5rem',
            backgroundColor: mode === 'dark' ? '#2a2a2a' : '#f9f9f9',
            borderRadius: '8px'
          }}>
            <div>
              <div style={{ fontSize: '13px', marginBottom: '10px', color: mode === 'dark' ? '#999' : '#666', fontWeight: 500 }}>
                Default close icon (×)
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Badge text="React" variant={variant} mode={mode} onRemove={() => alert('Removed React')} />
                <Badge text="TypeScript" variant={variant} mode={mode} onRemove={() => alert('Removed TypeScript')} />
                <Badge text="Vite" variant={variant} mode={mode} onRemove={() => alert('Removed Vite')} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', marginBottom: '10px', color: mode === 'dark' ? '#999' : '#666', fontWeight: 500 }}>
                Custom emoji icon
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Badge text="Delete" variant={variant} mode={mode} onRemove={() => alert('Removed')} closeIcon="🗑️" closeIconSize={10} />
                <Badge text="Cancel" variant={variant} mode={mode} onRemove={() => alert('Removed')} closeIcon="❌" closeIconSize={8} />
                <Badge text="Close" variant={variant} mode={mode} onRemove={() => alert('Removed')} closeIcon="⊗" closeIconSize={12} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', marginBottom: '10px', color: mode === 'dark' ? '#999' : '#666', fontWeight: 500 }}>
                Custom SVG icon (must use currentColor to inherit badge text color)
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Badge
                  text="Custom SVG"
                  variant={variant}
                  mode={mode}
                  onRemove={() => alert('Removed')}
                  closeIcon={
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  }
                />
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', marginBottom: '10px', color: mode === 'dark' ? '#999' : '#666', fontWeight: 500 }}>
                Phosphor Icons (automatically inherit color)
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Badge
                  text="CustomIconLibrary"
                  variant={variant}
                  mode={mode}
                  onRemove={() => alert('Removed')}
                  closeIcon={<X weight="bold" />}
                  closeIconSize={16}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};