enum Optimizers {
	AdaDelta = 'adaDelta',
	Adam = 'adam',
	Adagrad = 'adagrad',
	GD = 'GD',
	Momentum = 'momentum',
	Nadam = 'nadam',
	NAG = 'NAG',
	RMSProp = 'rmsprop',
	SGD = 'SGD',
}

export const getOptimizerValues = () => {
	return Object.values(Optimizers);
};

export default Optimizers;
