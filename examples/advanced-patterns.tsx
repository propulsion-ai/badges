import React, { useState } from 'react';
import { Badge } from '../src/components/Badge';
import type { BadgeVariant } from '../src/types/types';

export function AdvancedPatternsExample() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Vite', 'Testing']);
  const [newTag, setNewTag] = useState('');
  const [variant, setVariant] = useState<BadgeVariant>('solid');

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
    <div style={{ padding: '20px' }}>
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
          <option value="solid">Solid</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
          <option value="soft">Soft</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <div
            key={tag}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <Badge text={tag} variant={variant} />
            <button
              onClick={() => removeTag(tag)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '40px' }}>User Roles & Permissions</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Badge text="Admin" variant="solid" />
        <Badge text="Editor" variant="outline" />
        <Badge text="Viewer" variant="ghost" />
        <Badge text="Guest" variant="soft" />
      </div>

      <h3>File Types</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {['PDF', 'DOC', 'XLS', 'PPT', 'ZIP', 'IMG', 'VIDEO', 'AUDIO'].map(type => (
          <Badge key={type} text={type} />
        ))}
      </div>

      <h3 style={{ marginTop: '20px' }}>Priority Levels</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Badge text="Critical" variant="solid" />
        <Badge text="High" variant="solid" />
        <Badge text="Medium" variant="outline" />
        <Badge text="Low" variant="ghost" />
      </div>
    </div>
  );
}