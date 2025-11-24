import React from 'react';
import { GetWorkspaceByUser } from '@/src/models/GetWorkspaceByUser';


const WORKSPACE_URL = process.env.workspace_url;

async function getWorkspaces(): Promise<GetWorkspaceByUser[]> {
  const userId: string = "d456cbc4-29a1-4b1b-bad7-e43475e1c93d";
  const response = await fetch(WORKSPACE_URL + 'workspaces?userId=' + userId);
  const workspaces: GetWorkspaceByUser[] = await response.json();
  return workspaces;
}

// Este es un Server Component por defecto
export default async function WorkspacesPage() {
  const workspaces = await getWorkspaces();
  return (
    <div>
      <h1>Lista de workspaces</h1>
      <ul>
        {workspaces.map((workspace: GetWorkspaceByUser) => (
          <li key={workspace.id}>
            <strong>{workspace.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}