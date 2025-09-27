import { useState } from 'react';
import { Badge } from '../src/components/Badge';
import { BadgeMode } from '../src/types/types';

export function VariantsExample() {
  const [mode, setMode] = useState<BadgeMode>('light');
  const texts = ['Development', 'Production', 'Staging', 'Testing'];

  return (
    <div style={{
      padding: '20px',
      backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff',
      color: mode === 'dark' ? '#ffffff' : '#000000',
      minHeight: '500px'
    }}>
      <div style={{ marginBottom: '20px' }}>
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

      <h2>Badge Variants</h2>

      <div style={{ marginBottom: '30px' }}>
        <h3>Filled Variant (with background)</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          {texts.map(text => (
            <Badge key={text} text={text} variant="filled" mode={mode} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Outline Variant (no background)</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          {texts.map(text => (
            <Badge key={text} text={text} variant="outline" mode={mode} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Ghost Variant (no border)</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          {texts.map(text => (
            <Badge key={text} text={text} variant="outline" mode={mode} borderWidth={0} />
          ))}
        </div>
      </div>

      <h3>Border Width Variations</h3>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Badge text="0px" variant="filled" mode={mode} borderWidth={0} />
          <Badge text="0.25px" variant="filled" mode={mode} borderWidth={0.25} />
          <Badge text="0.5px" variant="filled" mode={mode} borderWidth={0.5} />
          <Badge text="0.75px" variant="filled" mode={mode} borderWidth={0.75} />
          <Badge text="1px" variant="filled" mode={mode} borderWidth={1} />
        </div>
      </div>
    </div>
  );
}