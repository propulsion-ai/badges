import React, { useState } from 'react';
import { Badge } from '../src/components/Badge';
import { BadgeMode } from '../src/types/types';

export function BasicUsageExample() {
  const [mode, setMode] = useState<BadgeMode>('light');

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

      <h2>Basic Badge Usage</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Badge text="New" mode={mode} />
        <Badge text="Featured" mode={mode} />
        <Badge text="Popular" mode={mode} />
        <Badge text="Trending" mode={mode} />
      </div>

      <h3>Categories</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Badge text="JavaScript" mode={mode} />
        <Badge text="TypeScript" mode={mode} />
        <Badge text="React" mode={mode} />
        <Badge text="Node.js" mode={mode} />
        <Badge text="CSS" mode={mode} />
      </div>

      <h3>Status Indicators</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Badge text="Active" mode={mode} />
        <Badge text="Pending" mode={mode} />
        <Badge text="Completed" mode={mode} />
        <Badge text="Archived" mode={mode} />
      </div>

      <h3>With Custom Font</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Badge text="Arial Font" mode={mode} font="Arial" />
        <Badge text="System UI" mode={mode} font="system-ui" />
        <Badge text="Monospace" mode={mode} font="monospace" />
      </div>
    </div>
  );
}