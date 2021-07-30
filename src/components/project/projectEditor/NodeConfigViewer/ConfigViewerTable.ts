import { BlockType } from '../../../../core/block';
import ActivationConfigComponent from './ConfigComponent/ActivationConfigComponent';
import AveragePooling2DConfigComponent from './ConfigComponent/AveragePooling2DConfigComponent';
import BatchNormalizationConfigComponent from './ConfigComponent/BatchNormalizationConfigComponent';
import Conv2DConfigComponent from './ConfigComponent/Conv2DConfigComponent';
import DenseConfigComponent from './ConfigComponent/DenseConfigComponent';
import DropoutConfigComponent from './ConfigComponent/DropoutConfigComponent';
import FlattenConfigComponent from './ConfigComponent/FlattenConfigComponent';
import InputConfigComponent from './ConfigComponent/InputConfigComponent';
import MaxPool2DConfigComponent from './ConfigComponent/MaxPool2DConfigComponent';

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
};

export default ConfigViewerTable;
