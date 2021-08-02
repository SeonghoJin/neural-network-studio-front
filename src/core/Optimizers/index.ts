enum Optimizers {
	GD = 'GD',
	SGD = 'SGD',
	Momentum = 'momentum',
	NAG = 'NAG',
	Adagrad = 'adagrad',
	RMSProp = 'rmsprop',
	AdaDelta = 'adaDelta',
	Adam = 'adam',
	Nadam = 'nadam',
}

export const getOptimizerValues = () => {
	return Object.values(Optimizers);
};

export default Optimizers;
