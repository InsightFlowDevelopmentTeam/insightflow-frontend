import { GetWorkspaceByUser } from '@/src/models/GetWorkspaceByUser';
import Board from '@/src/components/Board';

const WORKSPACE_URL = process.env.workspace_url;

const workspacesCache: { data: GetWorkspaceByUser[] | null } = { data: null };

async function getWorkspaces(): Promise<GetWorkspaceByUser[]> {
  const userId: string = "b3850a65-61d9-4417-8b03-de3a700d7064";
  const response = await fetch(WORKSPACE_URL + 'workspaces?userId=' + userId);
  const workspaces: GetWorkspaceByUser[] = await response.json();
  for (const workspace of workspaces) {
    if (workspace.userRole === 'Owner') {
      workspace.userRole = 'Propietario';
    }
  }
  return workspaces;
}

// Este es un Server Component por defecto
export default async function WorkspacesPage() {
  const workspaces = await getWorkspaces();
  workspacesCache.data = workspaces;
  return (
<main>
      <h1 style={{ textAlign: 'center', padding: '10px', backgroundColor: '#001b5aff' }}>
        Tu listado de espacios
      </h1>
      <Board workspaces={workspacesCache.data ?? []} />
    </main>
  );
}