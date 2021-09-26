# Socket

## Socket 통신시 서버에서 저장해야할 데이터

[ SocketService ](https://github.com/Stonebridge-soma12/otherFronts/tree/feat/src/core/Socket/SocketService)

## SocketEvents

[ SocketEvents ](https://github.com/Stonebridge-soma12/otherFronts/blob/feat/src/core/Socket/SocketEvent.ts)

## SocketDataTypes

### Project

#### Dtos

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
  "users(User[])": [{
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
    "user(User)": {
      "name": "진성호",
      "color": "#FFFFFF",
      "id": "ASDASDASD2"
    },
    "position(XYPosition)": {
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
  "position(XYPosition)": {
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

- BlockConfigChangeDto

```json
{
    "message": "change_block_config",
    "blockId": "Node-#####",
    "config" : {
    "name" : "padding",
    "value" : "Valid"
    }
}
```

- BlockLabelChangeDto

```json
{
    "message": "change_block_label",
    "blockId": "Node-#####",
    "data" : "ActivationNode84"
}
```

- EdgeCreateDto

```json
{
  "message": "create_edge",
  "elements" : []
}
```

- EdgeUpdateDto

```json
    "message": "update_edge",
"elements": [],
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
  "user(User)": {
    "name": "진성호",
    "color": "#FFFFFF",
    "id": "ASDASDASD2"
  }
}
```

#### Entities

- Cursor

```json
{
  "user(User)": {
    "name": "진성호",
    "color": "#FFFFFF",
    "id": "ASDASDASD2"
  },
  "position(XYPosition)": {
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

### ProjectConfig (추가)

#### Dtos

- ChangeProjectConfigDto

```json
{
  "message": "change_project_config",
  "name": "optimizer",
  "value": "0.1"
}
```

- ProjectEarlyStopConfigChangeDto

```json
{
  "message": "change_project_early_stop_config",
  "name": "optimizer",
  "value": "0.1"
}
```

- ProjectLearningRateReductionChangeDto

```json
{
  "message": "change_project_learning_rate_reduction_config",
  "name": "optimizer",
  "value": "0.1"
}
```
