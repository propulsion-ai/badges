import React, { useState } from 'react';
import { BadgeDemo } from '../src/components/BadgeDemo';
import { BasicUsageExample } from '../examples/basic-usage';
import { VariantsExample } from '../examples/variants';
import { AdvancedPatternsExample } from '../examples/advanced-patterns';
import { ColorPlayground } from './ColorPlayground';
import { BadgeMode } from '../src/types/types';

type Tab = 'interactive' | 'basic' | 'variants' | 'advanced' | 'playground';

export function DemoApp() {
  const [activeTab, setActiveTab] = useState<Tab>('interactive');
  const [mode, setMode] = useState<BadgeMode>('light');

  const tabStyle = (isActive: boolean) => ({
    padding: '10px 20px',
    backgroundColor: isActive ? '#007bff' : '#f0f0f0',
    color: isActive ? 'white' : '#333',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px 4px 0 0',
    marginRight: '2px',
    fontSize: '14px',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#333', fontSize: '2.5rem' }}>Consistint</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Beautiful, consistent pastel badges that inherit your typography
        </p>
        <div style={{ marginTop: '20px' }}>
          <a
            href="https://github.com/propulsion-ai/badges"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#24292e',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              marginRight: '10px',
            }}
          >
            View on GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/consistint"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#cb3837',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            View on npm
          </a>
        </div>
      </header>

      <div style={{ marginBottom: '20px', borderBottom: '2px solid #e0e0e0' }}>
        <button
          style={tabStyle(activeTab === 'interactive')}
          onClick={() => setActiveTab('interactive')}
        >
          Interactive Demo
        </button>
        <button
          style={tabStyle(activeTab === 'basic')}
          onClick={() => setActiveTab('basic')}
        >
          Basic Usage
        </button>
        <button
          style={tabStyle(activeTab === 'variants')}
          onClick={() => setActiveTab('variants')}
        >
          Variants
        </button>
        <button
          style={tabStyle(activeTab === 'advanced')}
          onClick={() => setActiveTab('advanced')}
        >
          Advanced Patterns
        </button>
        <button
          style={tabStyle(activeTab === 'playground')}
          onClick={() => setActiveTab('playground')}
        >
          🎨 Color Playground
        </button>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        {activeTab === 'interactive' && <BadgeDemo />}
        {activeTab === 'basic' && <BasicUsageExample />}
        {activeTab === 'variants' && <VariantsExample />}
        {activeTab === 'advanced' && <AdvancedPatternsExample />}
        {activeTab === 'playground' && <ColorPlayground />}
      </div>

      <footer style={{
        textAlign: 'center',
        marginTop: '40px',
        padding: '20px',
        color: '#666',
        fontSize: '14px',
      }}>
        <p>MIT License • Propulsion AI • 2024</p>
      </footer>
    </div>
  );
}