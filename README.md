# 데모
홈페이지 : ~~https://nnstudio.io/~~

데모 영상 : https://www.youtube.com/watch?v=to0KIZwbYeQ

# 용어 설명

- 데이터 셋 : 데이터 학습을 위한 데이터들의 집합입니다. 공공 데이터라고 생각하시면 됩니다. csv나 image의 zip파일로 구성되어 있습니다. 데이터의 정보는 프로젝트 데이터 셋 설정 페이지에서 확인할 수 있으며, 상단 100개의 데이터를 확인할 수 있습니다.
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
### 1. 회원 가입을 합니다.
<img width="1427" alt="스크린샷 2021-11-07 오후 7 15 43" src="https://user-images.githubusercontent.com/44808218/140641026-2b322955-3dfe-4949-9875-dddef854bf02.png">

### 2. 회원가입이 완료되면 로그인을 합니다.
<img width="1420" alt="스크린샷 2021-11-07 오후 7 15 54" src="https://user-images.githubusercontent.com/44808218/140641040-cbc72c39-f913-44f8-8bcf-fe7b7447989f.png">

### 3. 로그인한 뒤 데이터 스토어 페이지로 접속합니다.
![스크린샷 2021-11-08 오후 8 15 54](https://user-images.githubusercontent.com/44808218/140733656-d258dc04-80db-4436-80a8-5d420bbc8001.png)

### 4. 데이터 스토어에서 MNIST 라는 데이터셋을 라이브러리에 추가합니다.
![스크린샷 2021-11-08 오후 8 16 04](https://user-images.githubusercontent.com/44808218/140733652-1f5b8d48-618e-4e42-a393-068e6292d85b.png)

### 5. 대시보드 페이지에 접속합니다.
<img width="1421" alt="스크린샷 2021-11-07 오후 7 16 26" src="https://user-images.githubusercontent.com/44808218/140641050-692f5882-a689-4090-9bec-441a9c944ff6.png">

### 6. 대시보드 페이지에서 프로젝트 생성을 눌러 프로젝트 생성 페이지로 접속합니다.

<img width="1425" alt="스크린샷 2021-11-07 오후 7 17 21" src="https://user-images.githubusercontent.com/44808218/140641051-97215e14-a362-4bc6-b457-5169c92e1cee.png">

프로젝트의 이름과 설명을 작성하고 프로젝트 생성 버튼을 누릅니다.

### 7. 프로젝트 열기를 통해 프로젝트 페이지로 접속합니다.
<img width="1432" alt="스크린샷 2021-11-07 오후 7 17 27" src="https://user-images.githubusercontent.com/44808218/140641052-d02d3d6a-47cf-4dad-a1a2-53556f458843.png">

### 8. 프로젝트 페이지로 처음 접속하면 inputNode 한개가 생성되어 있는 것을 확인할 수 있습니다.
<img width="1427" alt="스크린샷 2021-11-07 오후 7 17 34" src="https://user-images.githubusercontent.com/44808218/140641053-482df0b8-2165-43d3-83c9-3bd408a392ed.png">

### 9. 그래프를 좀 더 멋지게 만들어 봅시다.

다음과 같은 그래프를 만들어 봅시다.
![스크린샷 2021-11-07 오후 7 30 10](https://user-images.githubusercontent.com/44808218/140641413-4eb33141-d0b3-4755-b4e7-d109f46a9d3d.png)

먼저 왼쪽 상단에 Layer 버튼을 눌러 어떤 노드가 있는지 확인해보세요.
Conv2D, Dense 등 Layer층에 해당한 노드들이 있습니다.

<img width="253" alt="스크린샷 2021-11-07 오후 7 36 19" src="https://user-images.githubusercontent.com/44808218/140641492-d9a12e75-000a-4504-9726-426c108eda04.png">

![스크린샷 2021-11-07 오후 7 30 02](https://user-images.githubusercontent.com/44808218/140641465-dc5676da-3e4d-4640-944d-47cfc4a3be64.png)

위 그림은 이제 만들어 볼 모델입니다.



Conv2D노드를 드래그하여 그래프 판 위에 올려 놓습니다. 
그리고 먼저 생성된 inputNode의 아래 점을 드래그 하여 Conv2D의 위의 검은 점에 연결해보세요.
다음과 같이 연결되었으면 성공입니다.

노드를 삭제하는 방법은 노드 클릭후 ESC 버튼을 눌러주세요.
엣지를 삭제하는 방법은 엣지의 끝 부분을 선택 한뒤 ESC 버튼을 눌러주세요.

<img width="216" alt="스크린샷 2021-11-07 오후 7 47 09" src="https://user-images.githubusercontent.com/44808218/140641817-00e74ef7-b283-40fd-97bd-0377d942a51c.png">

연결 후 Conv2D의 노드를 클릭하시고 왼쪽 하단을 보시면 노드에 대한 설정을 변경할 수 있습니다.
맨위의 TYPE은 어떤 노드인지 확인할 수 있습니다.
label은 노드의 이름입니다. 추후에 파이썬 코드로 변경될 때 이 이름이 하나의 변수가 됩니다.
다음과 같이 설정해주세요.

![스크린샷 2021-11-07 오후 7 30 50](https://user-images.githubusercontent.com/44808218/140641418-066454ec-1c5d-4eb8-b7fd-0dfda2fd0ed6.png)


![스크린샷 2021-11-07 오후 7 31 12](https://user-images.githubusercontent.com/44808218/140641420-2223ca20-ea50-4f9e-98bd-fade022c4f44.png)

BatchNormalization노드를 드래그하여 그래프 판 위에 올려 놓습니다.
위 그림과 같이 설정한뒤 Conv2D 엣지와 연결해주세요.

아래 사진 순서대로 노드를 만들어 주시고 값을 설정하고, 엣지를 차례대로 연결 해주세요.

![스크린샷 2021-11-07 오후 7 31 22](https://user-images.githubusercontent.com/44808218/140641415-b587759d-f96d-4240-b179-28d5d9ce9bfc.png)
![스크린샷 2021-11-07 오후 7 31 28](https://user-images.githubusercontent.com/44808218/140641416-abd86c66-fb7a-4467-86a2-c8c285aaffba.png)
![스크린샷 2021-11-07 오후 7 31 33](https://user-images.githubusercontent.com/44808218/140641419-7b43e0ac-6a9b-4e80-86ed-524ee43f511c.png)
![스크린샷 2021-11-07 오후 7 31 39](https://user-images.githubusercontent.com/44808218/140641410-27d38ae1-fdc1-4c73-8332-459094339623.png)
![스크린샷 2021-11-07 오후 7 31 44](https://user-images.githubusercontent.com/44808218/140641412-62f2f441-df04-4ccf-892c-49dc60b59fdb.png)


아래와 같이 그래프가 완성되었나요?

![스크린샷 2021-11-07 오후 7 30 02](https://user-images.githubusercontent.com/44808218/140641465-dc5676da-3e4d-4640-944d-47cfc4a3be64.png)

마지막으로 inputNode를 선택해 다음과 같이 설정해줍니다.

<img width="263" alt="스크린샷 2021-11-07 오후 7 54 35" src="https://user-images.githubusercontent.com/44808218/140642138-b9fba3ff-0144-4fd2-8d51-6c1889f61cb1.png">


변환 시키기 전에 저장 버튼을 눌러 줍시다.
이제 한번 파이썬 코드로 변환시켜봅니다.
노드를 드래그하는 컴포넌트 위에 보면 파이썬 코드로 내보내기라는 버튼이 있습니다. 버튼을 누르면 변환된 파이썬코드를 얻을 수 있습니다.
변환이 잘 되었으면 다음과 같은 코드를 얻을 수 있습니다.
<img width="1433" alt="스크린샷 2021-11-07 오후 7 56 23" src="https://user-images.githubusercontent.com/44808218/140642198-c516b806-106a-4c6e-ab43-272579bd2c22.png">

### 10. 데이터 셋 설정 페이지로 접속합니다.

페이지 접속후 왼쪽의 + 버튼을 누르면 다음과 같이 데이터 설정 셋 하나가 생성됩니다. 
생성된 데이터 설정 셋을 클릭해주세요.

<img width="1426" alt="스크린샷 2021-11-07 오후 8 04 01" src="https://user-images.githubusercontent.com/44808218/140642522-bad8328f-aead-4342-ac74-7d98bbaf9f45.png">

사용자는 여기서 자신의 데이터 셋 라이브러리에서 하나를 가져와 그 데이터셋에 대한 설정을 할 수 있습니다.


<img width="1430" alt="스크린샷 2021-11-07 오후 8 04 07" src="https://user-images.githubusercontent.com/44808218/140642520-e96cad22-0374-463d-9678-314fe8b7b364.png">

데이터 셋 이름은 원하시는 걸로 입력해주세요. 여기서는 Example로 하겠습니다.

데이터에는 MNIST값을 선택해주시고, Shuffle을 Check, 정규화는 Image로 레이블은 label 선택해주세요.

설정이 완료되면 저장 버튼을 눌러주세요. 

![스크린샷 2021-11-08 오후 8 22 21](https://user-images.githubusercontent.com/44808218/140733644-e637d5ca-5f10-4444-848f-e24e2a3483a2.png)

데이터 셋 설정 생성이 완료되면 다음 과 같은 메시지가 생성됩니다.

![스크린샷 2021-11-08 오후 8 22 28](https://user-images.githubusercontent.com/44808218/140733632-29413480-5388-4ec5-a73d-479aed403c74.png)

### 11. 프로젝트 설정 페이지로 접속합니다.

프로젝트 설정 페이지에서는 자신의 프로젝트에 관한 전반적인 설정을 할 수 있습니다.

데이터 셋 설정값을 아까전에 만들었던 데이터 셋 설정 이름으로 선택해봅시다. 

<img width="1430" alt="스크린샷 2021-11-07 오후 8 04 47" src="https://user-images.githubusercontent.com/44808218/140642524-4759fc92-ae29-4963-adf2-23b38d12a4ee.png">

저는 아까전 Example을 이름으로 데이터 셋 설정을 만들었으니 Example을 선택하겠습니다.

<img width="1425" alt="스크린샷 2021-11-07 오후 8 04 59" src="https://user-images.githubusercontent.com/44808218/140642510-61944c4d-2a89-440c-9ac9-97968dda29e6.png">

설정이 완료되면 저장 버튼을 눌러 프로젝트 설정을 저장해주세요.

<img width="1427" alt="스크린샷 2021-11-07 오후 8 05 04" src="https://user-images.githubusercontent.com/44808218/140642511-3324a653-16fd-470e-9bd5-3437371920a5.png">

### 12. 편집화면으로 돌아가 다시 한번 그래프를 확인해봅니다.

이제 모델 학습 버튼을 눌러 학습을 해봅니다.
학습 성공 메시지가 나타나면 학습 기록 페이지에 접속합니다.

<img width="1424" alt="스크린샷 2021-11-07 오후 8 05 33" src="https://user-images.githubusercontent.com/44808218/140642513-b11b8f3f-f3e4-4e8a-8bd2-f88079504574.png">

### 13. 학습 기록 확인하기

학습 요청이 성공 후 학습 기록 페이지에는 학습 결과 1개가 존재할 것입니다.

만약에 없다면 학습이 실패한 것이니, 데이터 셋 설정이나 프로젝트 설정, 그래프를 다시 한번 확인해주세요.

<img width="1425" alt="스크린샷 2021-11-07 오후 8 05 40" src="https://user-images.githubusercontent.com/44808218/140642514-506f3a6f-d822-4fc4-89b2-43a23c37d202.png">

현재 페이지에서 이 학습결과를 보고 있으면 지속적으로 서버와 통신을 하여 Epoch단위로 학습 결과를 그래프와 로그로 보여줍니다.
2분에서 3분정도 기다려주세요.

<img width="1413" alt="스크린샷 2021-11-07 오후 8 06 31" src="https://user-images.githubusercontent.com/44808218/140642515-fc35e932-62b6-4033-8598-4687049fd67f.png">

그래프가 잘 그려졌나요?

### 14. 모델 다운로드 하기 

학습이 완료되면 새로고침을 해주세요. 이제 모델을 다운로드 받을 수 있습니다. 
학습 결과에서 더보기를 클릭하시면 모델을 내려받을 수 있는 버튼이 있습니다.

<img width="1419" alt="스크린샷 2021-11-07 오후 9 13 04" src="https://user-images.githubusercontent.com/44808218/140644449-0e191a64-c1b8-4f90-b2dc-60d48ba0cbe5.png">

### 추가. ProjectShare 기능 이용하기

편집 페이지에서 저장 버튼 옆에 공유 이미지를 클릭하면 공유 화면으로 접속할 수 있습니다.
url 링크를 복사하여 친구들에게 보내보세요. 

<img width="1429" alt="스크린샷 2021-11-07 오후 8 24 03" src="https://user-images.githubusercontent.com/44808218/140642909-f71439e4-4aa5-40cb-b1bf-a881199891f1.png">


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
