import React from 'react';
import { WorkspacesByUser, GetWorkspaceByUser } from '@/src/models/GetWorkspaceByUser';
import Card from './Card';

interface BoardProps {
  workspaces: WorkspacesByUser;
}

// 1. Agrupamos los espacios de trabajo por su rol de usuario
const groupWorkspacesByRole = (workspaces: WorkspacesByUser) => {
  return workspaces.reduce((acc, workspace) => {
    // Si el rol ya existe en el acumulador, añade el workspace
    if (acc[workspace.userRole]) {
      acc[workspace.userRole].push(workspace);
    } else {
      // Si el rol no existe, créalo con el workspace
      acc[workspace.userRole] = [workspace];
    }
    return acc;
  }, {} as Record<string, GetWorkspaceByUser[]>);
};

export default function Board({ workspaces }: BoardProps) {
  const grouped = groupWorkspacesByRole(workspaces);
  const roles = Object.keys(grouped); // Obtiene todos los roles únicos (serán las columnas)

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', overflowX: 'auto', backgroundColor: '#f4f5f7' }}>
      {/* Mapeamos sobre los roles para crear una columna por cada uno */}
      {roles.map((role) => (
        <div 
          key={role} 
          style={{ 
            flexShrink: 0, // No permitir que las columnas se encojan
            width: '300px', 
            backgroundColor: '#ebecf0', 
            borderRadius: '3px', 
            padding: '10px', 
            minHeight: '400px' 
          }}
        >
          <h2 style={{ fontSize: '18px', margin: '0 0 10px 0', textTransform: 'capitalize' }}>
            {role} ({grouped[role].length})
          </h2>
          {/* Mapeamos sobre los workspaces dentro de ese rol para mostrar las tarjetas */}
          <div style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>
            {grouped[role].map((workspace) => (
              <Card key={workspace.id} workspace={workspace} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}