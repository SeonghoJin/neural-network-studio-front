import { BlockType } from '../../../../core/reactFlow/block';
import ActivationConfigComponent from './ConfigComponent/ActivationConfigComponent';
import AveragePooling2DConfigComponent from './ConfigComponent/AveragePooling2DConfigComponent';
import BatchNormalizationConfigComponent from './ConfigComponent/BatchNormalizationConfigComponent';
import Conv2DConfigComponent from './ConfigComponent/Conv2DConfigComponent';
import DenseConfigComponent from './ConfigComponent/DenseConfigComponent';
import DropoutConfigComponent from './ConfigComponent/DropoutConfigComponent';
import FlattenConfigComponent from './ConfigComponent/FlattenConfigComponent';
import InputConfigComponent from './ConfigComponent/InputConfigComponent';
import MaxPool2DConfigComponent from './ConfigComponent/MaxPool2DConfigComponent';
import RescalingConfigComponent from './ConfigComponent/RescalingConfigComponent';
import ReshapeConfigComponent from './ConfigComponent/ReshapeConfigComponent';
import AbsConfigComponent from './ConfigComponent/Math/AbsConfigComponent';
import CeilConfigComponent from './ConfigComponent/Math/CeilConfigComponent';
import FloorConfigComponent from './ConfigComponent/Math/FloorConfigComponent';
import RoundConfigComponent from './ConfigComponent/Math/RoundConfigComponent';
import SqrtConfigComponent from './ConfigComponent/Math/SqrtConfigComponent';
import AddConfigComponent from './ConfigComponent/Math/AddConfigComponent';
import SubtractConfigComponent from './ConfigComponent/Math/SubtractConfigComponent';
import LogConfigComponent from './ConfigComponent/Math/LogConfigComponent';

type ConfigViewerTableKeyType = typeof BlockType[keyof typeof BlockType];

type ConfigViewerTableType = {
	[index in ConfigViewerTableKeyType]: (props?: any) => JSX.Element;
};

const ConfigViewerTable: ConfigViewerTableType = {
	Activation: ActivationConfigComponent,
	AveragePooling2D: AveragePooling2DConfigComponent,
	BatchNormalization: BatchNormalizationConfigComponent,
	Conv2D: Conv2DConfigComponent,
	Dense: DenseConfigComponent,
	Dropout: DropoutConfigComponent,
	Flatten: FlattenConfigComponent,
	Input: InputConfigComponent,
	MaxPool2D: MaxPool2DConfigComponent,
	Rescaling: RescalingConfigComponent,
	Reshape: ReshapeConfigComponent,
	// Math
	Abs: AbsConfigComponent,
	Ceil: CeilConfigComponent,
	Floor: FloorConfigComponent,
	Round: RoundConfigComponent,
	Sqrt: SqrtConfigComponent,
	Add: AddConfigComponent,
	Subtract: SubtractConfigComponent,
	Log: LogConfigComponent,
};

export default ConfigViewerTable;
