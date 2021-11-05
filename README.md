# 기술스택
- React : 컴포넌트 재사용하기 위해 이용
- Typescript : 타입을 사용함으로써 버그가 나타나는 빈도를 줄이기 위해, 그리고 자바스크립트의 생산성 그대로 가져오기 위해 사용
- Redux : Props-drilling 등 리액트의 고전 문제를 해결하기 위해 사용했으나, 대부분 Recoil로 변경 됨. 그래프의 상태를 관리하는 데 사용 중. 그 외의 코드는 모드 Recoil로 구성되어 있다.
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

# 데모
https://nnstudio.io/

- 데이터 셋 : 학습 시키기 위한 데이터. 사용자들은 이 데이터셋을 사용하여 본인이 만든 모델로 학습 시킬 수 있다.
- 데이터 스토어 : 데이터 셋들이 있으며, 사용자들은 데이터셋을 데이터 스토어에 올릴 수 있다. 사용자들은 데이터 스토어에 있는 데이터 셋을 자신의 데이터 셋 라이브러리에 가져올 수 있다. 
- 프로젝트 : 대시보드에 들어가면 사용자들은 프로젝트를 만들 수 있다. 프로젝트를 만들고 나면 그래프를 만들 수 있게 된다. 
- 프로젝트 설정 : 프로젝트에 대한 전반적인 설정이다. Epoch등을 설정할 수 있다.
- 프로젝트 데이터 셋 설정 : 데이터 셋에 대한 설정으로, 데이터셋의 Shuffle, label, 정규화등을 설정할 수 있다.

## 사용법 
### 1. 로그인 뒤 데이터스토어 화면으로 접속한다.
### 2. 마음에 드는 데이터셋을 라이브러리에 추가한다. (LOL Test 데이터셋 추가)
### 3. 대시보드 화면으로 접속한다.
### 4. 프로젝트를 만들고 프로젝트 열기버튼을 누른다.
### 5. 왼쪽 상단에 있는 블록들을 드래그하여 그래프 위에 올려놓으면 블록들이 만들어진다. 
### 6. 블록의 점을 드래깅하면 다른 블록과 엣지를 만들 수 있다.
### 7. 저장하고 나서 프로젝트 데이터 셋 설정 화면으로 접속한다.
### 8. + 버튼을 누르고 데이터 셋 설정을 한다. 라이브러리에 추가했었던 데이터를 설정하고 데이터에 관련된 설정을 한다. 
### 9. 프로젝트 설정으로 접속하여 데이터셋 설정 부분에 아까 만들어 놨던 데이터 설정을 설정한다.
### 10. 편집화면으로 돌아와 파이썬 코드 내보내기 버튼을 눌러 파이썬 코드 변환이 제대로 이루어지는지 확인한다.
### 11. 모델 학습페이지로 넘어가 학습이 잘 진행되는지 확인한다.

