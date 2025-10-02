import { useState } from 'react';
import { Badge } from '../src/components/Badge';
import type { BadgeVariant, BadgeMode } from '../src/types/types';

export function AdvancedPatternsExample() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Vite', 'Testing']);
  const [newTag, setNewTag] = useState('');
  const [variant, setVariant] = useState<BadgeVariant>('filled');
  const [mode, setMode] = useState<BadgeMode>('light');

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

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

      <h2>Advanced Badge Patterns</h2>

      <h3>Dynamic Tags Management</h3>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTag()}
          placeholder="Add a tag..."
          style={{
            padding: '8px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button onClick={addTag} style={{ padding: '8px 16px' }}>Add Tag</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Variant:</label>
        <select
          value={variant}
          onChange={(e) => setVariant(e.target.value as BadgeVariant)}
          style={{ padding: '4px' }}
        >
          <option value="filled">Filled</option>
          <option value="outline">Outline</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <Badge
            key={tag}
            text={tag}
            variant={variant}
            mode={mode}
            onRemove={() => removeTag(tag)}
          />
        ))}
      </div>

      <h3 style={{ marginTop: '40px' }}>Removable Badges with Custom Icons</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Badge
          text="Default"
          variant={variant}
          mode={mode}
          onRemove={() => alert('Removed!')}
        />
        <Badge
          text="Custom Icon"
          variant={variant}
          mode={mode}
          onRemove={() => alert('Removed!')}
          closeIcon={<span style={{ fontSize: '12px' }}>🗑️</span>}
        />
        <Badge
          text="Custom SVG"
          variant={variant}
          mode={mode}
          onRemove={() => alert('Removed!')}
          closeIcon={
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
        />
      </div>

      <h3 style={{ marginTop: '40px' }}>User Roles & Permissions</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Badge text="Admin" variant="filled" mode={mode} />
        <Badge text="Editor" variant="outline" mode={mode} />
        <Badge text="Viewer" variant="outline" mode={mode} borderWidth={0} />
        <Badge text="Guest" variant="filled" mode={mode} />
      </div>

      <h3>File Types</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {['PDF', 'DOC', 'XLS', 'PPT', 'ZIP', 'IMG', 'VIDEO', 'AUDIO'].map(type => (
          <Badge key={type} text={type} mode={mode} />
        ))}
      </div>

      <h3 style={{ marginTop: '20px' }}>Priority Levels</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Badge text="Critical" variant="filled" mode={mode} />
        <Badge text="High" variant="filled" mode={mode} />
        <Badge text="Medium" variant="outline" mode={mode} />
        <Badge text="Low" variant="outline" mode={mode} borderWidth={0} />
      </div>
    </div>
  );
}