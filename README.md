# Socket

## SocketEvents
[ SocketEvents ](https://github.com/Stonebridge-soma12/otherFronts/blob/feat/src/core/Socket/SocketEvent.ts)
## SocketDataTypes


### Dtos

- UserCreateResponseDto
```json
{
  "message": "create_user_response",
  "project" : {
    
  }
}
```

- UserListResponseDto
```json
{
  "message": "user_list_response",
  "users": [{
    "name": "진성호",
    "color": "#FFFFFF",
    "id": "ASDASDASD"
  }, {
    "name": "차도인",
    "color": "#FFFFF1",
    "id": "ASDASDASD1"
  }, {
    "name": "이태원",
    "color": "#FFFFF2",
    "id": "ASDASDASD2"
  }]
}
```

- CursorMoveDto
```json
{
  "message": "move_cursor",
  "cursor": {
    "user": {
      "name": "진성호",
      "color": "#FFFFFF",
      "id": "ASDASDASD2"
    },
    "position": {
      "x": 100,
      "y": 100
    }
  }
}
```

- BlockRemoveDto
```json
{
  "message": "remove_block",
  "blockId": "block-####"
}
```
- BlockMoveDto
```json
{
  "message": "move_block",
  "blockId": "block-####",
  "position": {
    "x": 100,
    "y": 100
  }
}
```
- BlockCreateDto
```json
{
  "message": "create_block",
  "blockId": "block-#####",
  "block": {
  } 
}
```
- BlockChangeDto
```json
{
  "message": "change_block",
  "blockId": "Node-#####",
  "blockState": {

  }
}
```

- EdgeCreateDto
```json
{
  "message": "create_edge",
  "edgeId": "edge-#####",
  "edge": {

  }
}
```

- EdgeRemoveDto
```json
{
  "message": "remove_edge",
  "edgeId": "edge-#####"
}
```

- UserRemoveRequestDto
```json
{
  "message": "remove_user_request",
  "user": {
    "name": "진성호",
    "color": "#FFFFFF",
    "id": "ASDASDASD2"
  }
}
```



### Entities

- Cursor
```json
{
  "user": {
    "name": "진성호",
    "color": "#FFFFFF"
  },
  "position": {
    "x": 100,
    "y": 100
  }
}
```

- Node
```json
{
  "data": {
    
  }
}
```

- User
```json
{
    "name": "진성호",
    "color": "#FFFFFF",
    "id": "ASDASDASD2"
}
```

- XYPosition
```json
{
  "x": 100,
  "y": 100
}
```
