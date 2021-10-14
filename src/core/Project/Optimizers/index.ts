enum Optimizers {
	AdaDelta = 'AdaDelta',
	Adam = 'Adam',
	Adamax = 'Adamax',
	Adagrad = 'Adagrad',
	AdamW = 'AdamW',
	// GD = 'GD',
	// Momentum = 'momentum',
	Nadam = 'Nadam',
	// NAG = 'NAG',
	RMSProp = 'RMSProp',
	SGD = 'SGD',
	SGDW = 'SGDW',
}

export const getOptimizerValues = () => {
	return Object.values(Optimizers);
};

export default Optimizers;
