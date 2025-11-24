import { GetWorkspaceByUser } from '@/src/models/GetWorkspaceByUser';
import Board from '@/src/components/Board';

const WORKSPACE_URL = process.env.workspace_url;

const workspacesCache: { data: GetWorkspaceByUser[] | null } = { data: null };

async function getWorkspaces(): Promise<GetWorkspaceByUser[]> {
  const userId: string = "59ff940b-afef-4066-9adb-e5b7b41fcb60";
  const response = await fetch(WORKSPACE_URL + 'workspaces?userId=' + userId);
  const workspaces: GetWorkspaceByUser[] = await response.json();
  return workspaces;
}

// Este es un Server Component por defecto
export default async function WorkspacesPage() {
  const workspaces = await getWorkspaces();
  workspacesCache.data = workspaces;
  return (
<main>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>Tablero de Espacios de Trabajo por Rol</h1>
      <Board workspaces={workspacesCache.data ?? []} />
    </main>
  );
}