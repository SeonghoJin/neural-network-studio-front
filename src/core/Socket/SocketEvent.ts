export enum SocketEvent {
	MoveCursor = 'move_cursor',
	CreateBlock = 'create_block',
	MoveBlock = 'move_block',
	ChangeBlock = 'change_block',
	RemoveBlock = 'remove_block',
	CreateEdge = 'create_edge',
	RemoveEdge = 'remove_edge',
	CreateUserRequest = 'create_user',
	CreateUserResponse = 'create_user_response',
	RemoveUserRequest = 'remove_user_request',
	UserListResponse = 'user_list_response',
}
