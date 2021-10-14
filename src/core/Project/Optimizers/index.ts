enum Optimizers {
	Adadelta = 'Adadelta',
	Adagrad = 'Adagrad',
	Adam = 'Adam',
	Adamax = 'Adamax',
	AdamW = 'AdamW',
	// GD = 'GD',
	// Momentum = 'momentum',
	Nadam = 'Nadam',
	RMSprop = 'RMSprop',
	SGD = 'SGD',
	SGDW = 'SGDW',
}

export const getOptimizerValues = () => {
	return Object.values(Optimizers);
};

export default Optimizers;
