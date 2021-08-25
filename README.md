# Socket

## SocketEvents
[ SocketEvents ](https://github.com/Stonebridge-soma12/otherFronts/blob/feat/src/core/Socket/SocketEvent.ts)
## SocketDataTypes


### Dtos

- UserCreateResponseDto
```json
{
  "project" : {
    
  }
}
```

- UserListResponseDto
```json
{
  "users": [{
    "name": "진성호",
    "color": "#FFFFFF"
  }, {
    "name": "차도인",
    "color": "#FFFFF1"
  }, {
    "name": "이태원",
    "color": "#FFFFF2"
  }]
}
```

- CursorMoveDto
```json
{
  "cursor": {
    "user": {
      "name": "진성호",
      "color": "#FFFFFF"
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
  "blockId": "block-####"
}
```
- BlockMoveDto
```json
{

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
  "blockId": "block-#####",
  "block": {
  } 
}
```
- BlockChangeDto
```json
{
  "blockId": "Node-#####",
  "blockState": {

  }
}
```

- EdgeCreateDto
```json
{
  "edgeId": "edge-#####",
  "edge": {

  }
}
```

- EdgeRemoveDto
```json
{
  "edgeId": "edge-#####"
}
```

- UserRemoveRequestDto
```json
{
  "user": {
    "name": "진성호",
    "color": "#FFFFFF"
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
    "color": "#FFFFFF"
}
```

- XYPosition
```json
{
  "x": 100,
  "y": 100
}
```
