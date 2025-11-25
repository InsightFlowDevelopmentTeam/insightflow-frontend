import React from 'react';
import { WorkspacesByUser } from '@/src/models/GetWorkspaceByUser';
import Card from './Card';

interface BoardProps {
  workspaces: WorkspacesByUser;
}

export default function Board({ workspaces }: BoardProps) {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', overflowX: 'auto', backgroundColor: '#f2f6ffff' }}>
      <div
        style={{
          flexShrink: 0,
          width: '300px',
          borderRadius: '3px',
          padding: '10px',
          minHeight: '400px',
        }}
      >
        <div style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
          {workspaces.map((workspace) => (
            <Card key={workspace.id} workspace={workspace} />
          ))}
        </div>
      </div>
    </div>
  );
}
