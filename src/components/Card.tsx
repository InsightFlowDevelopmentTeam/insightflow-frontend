import React from 'react';
import { GetWorkspaceByUser } from '@/src/models/GetWorkspaceByUser';

interface CardProps {
  workspace: GetWorkspaceByUser;
}

export default function Card({ workspace }: CardProps) {
  return (
    <div 
      style={{
        padding: '12px',
        margin: '8px 0',
        borderRadius: '6px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: workspace.userRole === 'Admin' ? '4px solid #4CAF50' : '4px solid #2196F3'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        {/* Placeholder para la imagen (podrías usar <img> real) */}
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ccc', marginRight: '10px', overflow: 'hidden' }}>
          {/* Aquí iría: <img src={workspace.imageUrl} alt={workspace.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
        </div>
        <h3 style={{ margin: 0, fontSize: '16px' }}>
          {workspace.name}
        </h3>
      </div>
      <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
        Rol: <strong>{workspace.userRole}</strong>
      </p>
      <small style={{ color: '#aaa' }}>ID: {workspace.id}</small>
    </div>
  );
}