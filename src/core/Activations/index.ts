import Paddings from '../Padding';

enum Activations {
	Sigmoid = 'sigmoid',
	Tanh = 'thanh',
	ReLU = 'relu',
	LeakyReLU = 'leakyRelu',
	SoftMax = 'softmax',
}

export const getActivationValues = () => {
	return Object.values(Activations);
};

export default Activations;
