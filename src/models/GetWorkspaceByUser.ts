import { UserModel } from "./UserModel";

export interface GetWorkspaceByUser {
    id: string;
    name: string;
    description: string;
    topic: string;
    imageUrl: string;
    users: UserModel[];
    createdAt: string;
    isActive: boolean;
}
export type WorkspacesByUser = GetWorkspaceByUser[];

