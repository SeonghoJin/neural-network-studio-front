# 데모
https://nnstudio.io/

- 데이터 셋 : 데이터 학습을 위한 데이터들의 집합입니다. 공공 데이터라고 생각하시면 됩니다. csv나 image의 zip파일로 구성되어 있다. 데이터의 정보는 프로젝트 데이터 셋 설정 페이지에서 확인할 수 있으며, 상단 100개의 데이터를 확인할 수 있습니다.
  - supra 데이터 셋
    <img width="712" alt="스크린샷 2021-11-07 오후 3 50 00" src="https://user-images.githubusercontent.com/44808218/140635514-b7de292d-2971-4887-8455-28428d9821e9.png">
  - LoL 데이터 
    <img width="1123" alt="스크린샷 2021-11-07 오후 3 50 15" src="https://user-images.githubusercontent.com/44808218/140635511-92f94840-7bc5-4391-8edb-4289e81848f4.png">
- 데이터 스토어 : 데이터 셋을 자신의 라이브러리에 추가 및 삭제 혹은 자신의 데이터 셋을 공유할 수 있는 페이지입니다.
  <img width="1412" alt="스크린샷 2021-11-07 오후 3 51 20" src="https://user-images.githubusercontent.com/44808218/140635507-4154a714-96a6-4826-b2b4-2e83d22b400c.png">
- 대시보드 : 자신의 프로젝트가 있는 공간입니다. 이 페이지에서 사용자는 프로젝트를 생성 및 삭제를 할 수 있습니다.
  <img width="1413" alt="스크린샷 2021-11-07 오후 3 51 27" src="https://user-images.githubusercontent.com/44808218/140635504-ead5daa1-66cb-42c9-9a83-e1602e3196dc.png">
- 프로젝트 : 모델을 만들 수 있는 공간입니다. 사용자는 모델을 만들어 파이썬 코드를 추출하거나 학습시킬 수 있습니다.
  <img width="1427" alt="스크린샷 2021-11-07 오후 3 51 41" src="https://user-images.githubusercontent.com/44808218/140635503-bcac9588-bfc2-4a49-a1c5-d685796b9cb8.png">
- 프로젝트 데이터 셋 설정 : 데이터 셋에 대한 설정으로, 데이터셋의 Shuffle, label, 정규화등을 설정할 수 있습니다.
  <img width="1427" alt="스크린샷 2021-11-07 오후 3 52 12" src="https://user-images.githubusercontent.com/44808218/140635500-a6da35d1-9fa5-4c21-bea0-618ddb7b16da.png">
- 프로젝트 설정 : 모델에 대한 설정입니다. Epoch, Batch Size, Loss와 자신이 만든 데이터 셋 설정의 종류를 선택할 수 있습니다.
  <img width="1428" alt="스크린샷 2021-11-07 오후 3 52 25" src="https://user-images.githubusercontent.com/44808218/140635498-6be2e7f4-ead7-4804-b746-c7bc882efdf1.png">
## 사용법
### 1. 회원 가입 후 로그인 한 다음 데이터스토어 화면으로 접속한다.
### 2. 마음에 드는 데이터셋을 라이브러리에 추가한다. (LOL Test 데이터셋 추가)
![스크린샷 2021-11-05 오후 1 19 30](https://user-images.githubusercontent.com/44808218/140457663-de96c68c-17ff-4ec0-98a6-6ede40010f19.png)
### 3. 대시보드 화면으로 접속한다.
### 4. 프로젝트를 만들고 프로젝트 열기버튼을 누른다.
![스크린샷 2021-11-05 오후 1 19 55](https://user-images.githubusercontent.com/44808218/140457692-0cedcdb5-2eb3-4a2f-b974-8fd4dfbfb4aa.png)
### 5. 왼쪽 상단에 있는 블록들을 드래그하여 그래프 위에 올려놓으면 블록들이 만들어진다. 
### 6. 블록의 점을 드래깅하면 다른 블록과 엣지를 만들 수 있다.
![스크린샷 2021-11-05 오후 1 20 24](https://user-images.githubusercontent.com/44808218/140457727-bb4ec2b3-c02e-4c3d-bfbc-86c115a03603.png)

### 7. 저장하고 나서 프로젝트 데이터 셋 설정 화면으로 접속한다.
### 8. + 버튼을 누르고 데이터 셋 설정을 한다. 라이브러리에 추가했었던 데이터를 설정하고 데이터에 관련된 설정을 한다. 
![스크린샷 2021-11-05 오후 1 20 48](https://user-images.githubusercontent.com/44808218/140457761-05766ace-d569-4332-ae0e-b1af731755f3.png)
### 9. 프로젝트 설정으로 접속하여 데이터셋 설정 부분에 아까 만들어 놨던 데이터 설정을 설정한다.
![스크린샷 2021-11-05 오후 1 21 02](https://user-images.githubusercontent.com/44808218/140457783-02dd3558-f952-4d70-b510-0211c0b49633.png)
### 10. 편집화면으로 돌아와 파이썬 코드 내보내기 버튼을 눌러 파이썬 코드 변환이 제대로 이루어지는지 확인하고, 학습을 시작한다.
![스크린샷 2021-11-05 오후 1 21 30](https://user-images.githubusercontent.com/44808218/140457810-f3457d04-ba9e-4abb-8872-d6c3733bcb27.png)
### 11. 모델 학습페이지로 넘어가 학습이 잘 진행되는지 확인한다.
![스크린샷 2021-11-05 오후 1 21 44](https://user-images.githubusercontent.com/44808218/140457830-158c71a5-25b4-4d35-82ea-e4edabee6c37.png)

# 주의
아직 계속해서 개발 중이고 개선중인 프로젝트 입니다 (~2021.12.01까지)
파이썬 코드 변환은 잘 만들어져도 학습 실행이 안될 경우가 있습니다. 학습 실행 되기 위해서는 그래프의 블록 값들이 제대로 설정되어 있어야하고 이를 제대로 설정하기 위해서는 인공지능과 관련된 지식이 필요합니다. 제대로 설정만 된다면 위의 페이지와 같이 학습이 진행되는 모습을 실시간으로 그래프로 보실 수 있습니다.


# 기술스택
- React : 컴포넌트 재사용하기 위해 이용
- Typescript : 타입을 사용함으로써 버그가 나타나는 빈도를 줄이기 위해, 그리고 자바스크립트의 생산성 그대로 가져오기 위해 사용
- Redux : Props-drilling 등 리액트의 고전 문제를 해결하기 위해 사용했으나, 대부분 Recoil로 변경 됨. 그래프의 상태를 관리하는 데 사용 중. 그 외의 코드는 모 Recoil로 구성되어 있다.
- Recoil : 많은 양이 필요한 Redux와 달리 작은 코드로 상태관리를 할 수 있어 사용.
- useSWR : 데이터를 패치하는 곳에 많이 사용되었다. 초기에 비동기 데이터를 처리하기 위해 Redux-thunk를 활용했지만 Redux를 삭제함으로 상당부분 Redux-chunk코드가 삭제되었다. 따라서 새로운 비동기 라이브러리를 사용하거나 그냥 직접 만들었어야 했는데, useSWR이 바로 그 해결책이였다. 하지만 useSWR은 데이터를 가져오는데 특화 되어있는 라이브러리이기 때문에, data를 업데이트하는 요청은 처리하지 못했다. 따라서 데이터를 업데이트 하거나 삭제하는 부분은 recoil 상태관리 툴을 이용해 만들어 사용했다. useSWR의 안전성은 매우 높다. get요청을 하는 부분이 useSWR로 변경되어 갈 때, 많은 차이가 있었다. 기존의 get요청하는 부분은 에러가 많았다. 예를 들면, 중간에 네트워크가 끊기거나, 잘못된 요청이 되어 에러가 나거나 이러한 부분에 대해 재 요청을 하지 않았다. 물론 내가 다시 요청을 보내면 되긴 하지만 useSWR은 다시 요청하는 부분을 알아서 처리해줬기 때문에 매우 편리했다.
- react-flow-nns : react-flow 라이브러리를 포크해 수정한 그래프 렌더링 라이브러리이다. 고쳐서 사용한 이유는 프론트엔드 특성상 외부 인터페이스가 많았기 때문이다. 다른 쪽 코드에서 사용한 코드가 이 라이브러리를 타고 들어가고 나오면 안되는 경우가 있었기 때문에 직접 수정하여 사용하기로 했다. 
다음과 같은 문제들이 있었다. 
  1) Edge를 연결할 때 정확하게 Node의 점을 연결해야 한다는 것,
  2) 라이브러리 외부에서 구현하게 될 경우, 내가 만든 코드가 라이브러리에서 누락 될 경우가 있었다.
  
  직접 라이브러리를 수정하여 배포하고 사용했다.

# 정확한 그래프를 만들기 위한 제약 조건
[ 제약조건 세팅 코드 ](https://github.com/SeonghoJin/NeuralNetworkStudio/tree/master/src/core/Project/settings)

정확한 제약조건을 확인하기 위해서는 위의 링크를 따라가서 직접 코드를 보면 좋을 것 같다.

정확한 그래프를 만들기 위해 타입이나 엣지 (Dense, Input) 등에 대한 조건을 명시한다. 
- BlockLimit는 각 블록 타입에 대한 갯수를 명시한다.
```typescript
import { BlockType } from '../../../reactFlow/block/BlockType';

const UNIQUE = 1;
const INFINITY = 100;

type MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH_KEY = keyof typeof BlockType;
export const MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH: {
	[K in MAXIMUM_NUMBER_PER_BLOCK_TYPE_AT_GRAPH_KEY]: number;
} = {
	Activation: INFINITY,
	AveragePooling2D: INFINITY,
	BatchNormalization: INFINITY,
	Conv2D: INFINITY,
	Dropout: INFINITY,
	Flatten: INFINITY,
	MaxPool2D: INFINITY,
	Dense: INFINITY,
	Input: UNIQUE,
	Rescaling: INFINITY,
	Reshape: INFINITY,

	Abs: INFINITY,
	Ceil: INFINITY,
	Floor: INFINITY,
	Round: INFINITY,
	Sqrt: INFINITY,
	Add: INFINITY,
	Subtract: INFINITY,
	Log: INFINITY,
};
```
위의 코드로 블록 타입에 대한 갯수를 제한했다.
- EdgeLimit는 각 블록타입에 연결 가능한 Edge를 명시한다. 이는 블록에 들어가는 입구와 출구 따로 명시한다.
- BlockRelationShip은 연결 가능한 블록 타입들을 명시한다.
~~~typescript
const BlockRelationShip: {
	[K in BlockRelationShipKey]: Set<BlockType>;
} = {
	Activation: new Set([
		BlockType.Conv2D,
		BlockType.Activation,
		BlockType.AveragePooling2D,
		BlockType.Dense,
		BlockType.Dropout,
		BlockType.BatchNormalization,
		BlockType.Flatten,
		BlockType.MaxPool2D,
		BlockType.Rescaling,
		BlockType.Reshape,

		BlockType.Abs,
		BlockType.Ceil,
		BlockType.Floor,
		BlockType.Round,
		BlockType.Sqrt,
		BlockType.Add,
		BlockType.Subtract,
		BlockType.Log,
	]),
~~~
위의 예제는 Activation이 연결할 수 있는 블록들을 명시한 코드이다. 

# Socket
[ Socket 관련 Dto, Event ](https://github.com/Stonebridge-soma12/otherFronts/tree/feat/src/core/Socket)


# 프로젝트 후기
여러가지로 많은 도전이 있었던 프로젝트였다. 리액트는 Class Component만 1달 정도 사용해봤지만 Fuctional Component는 한번도 사용해본적이 없었기 때문에 리액트를 다시 공부했었어야 했다. 리액트를 다시 배우다 보니 선언형 프로그래밍이 무엇인지 알게 되었다. 마치 내가 설계를 해두면, 어떤 데이터가 들어오든 잘 흘러가면 모양이 잘 나오는? 그런느낌이였다. 이를 직접 사용해보면서 선언형 프로그래밍이 절차적 프로그래밍보다 버그가 덜 일어날 것이라고 생각했다. 왜냐하면 절차적 프로그래밍에서는 데이터의 흐름을 내가 직접 조종하는 반면 선언형 프로그래밍에서는 데이터의 흐름은 이쪽으로 흘러가면 된다~ 라고 알려주기만 하면 되었기 때문이다. 

프로젝트 공유화면도 좀 일이 많았다. 먼저 어떤 소켓을 사용해야할지 고민했다. 개인적으로 Socket.io가 맘에 들었는데, 이게 서버에서는 Node.js만 사용할 수 있는 라이브러리여서 WebSocket을 사용할수 밖에 없었다. 하지만 그 전에 테스트 한다치고 Nest.js랑 통신하는 Socket.io코드가 그대로 있어서 아쉬워서 나는 WebSocket과 Socket.io를 둘다 호환이 되는 SocketProvider를 만들었다. 물론 추상화만 했을 뿐 Socket.io부분 구현체는 만들지 않았다. 하지만 작은 Example을 만들어 둘다 호환이 되도록 했는데, 데이터를 받는 부분 과 데이터를 전송하는 부분을 추상화하여 이를 구현했다. 

가장 어려웠던 부분은 아마 그래프 렌더링 라이브러리를 수정했던게 아닐까 싶다. 프로젝트를 진행하면서 우리가 원하는 몇몇 기능이 렌더링 라이브러리에는 없었다. 또한 기대하던 기능이 제대로 작동되지 않았다. 예를 들자면, 블록간에 연결제한은 블록 간에 연결이 되었을 때 판별하여 판단을 하는데, 만약 블록 간에 연결이 업데이트 된다면, 즉 A, B, C 블록이 있고 A - B연결을 A - C연결로 바꿔버린다면 이때는 제약조건이 발동되지 않는다. 왜냐하면 이 행위는 create가 아니라 update이기 때문이다. 이 라이브러리 내부구조가 이렇게 되어있어서, 따로 따로 작동 한 것이다. 엣지가 변경, 삭제, 추가 되었을 때 이 제약조건이 작동하면 좋지만 라이브러리에서는 그게 되지 않았다. 단순히 추가가 되었을 때만 제약조건이 작동했다. 이러한 예제로 직접 수정하기로 했다. 라이브러리를 파악하는데 하루~이틀 정도 걸렸던 것 같다. 그러다가 버그도 찾게 되어 수정한 뒤에 풀 리퀘를 날리고 main branch에 머지도 되었는데, 이때 오픈소스에 대한 재미를 본 것 같다. 

