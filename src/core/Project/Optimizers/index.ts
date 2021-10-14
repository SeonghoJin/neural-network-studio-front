enum Optimizers {
	Adadelta = 'Adadelta',
	Adagrad = 'Adagrad',
	Adam = 'Adam',
	Adamax = 'Adamax',
	Nadam = 'Nadam',
	RMSprop = 'RMSprop',
	SGD = 'SGD',
	AdamW = 'AdamW',
	SGDW = 'SGDW',
}

export const getOptimizerValues = () => {
	return Object.values(Optimizers);
};

export default Optimizers;
