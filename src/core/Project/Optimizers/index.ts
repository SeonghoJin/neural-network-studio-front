enum Optimizers {
	AdaDelta = 'AdaDelta',
	Adagrad = 'Adagrad',
	Adam = 'Adam',
	Adamax = 'Adamax',
	Nadam = 'Nadam',
	RMSProp = 'RMSProp',
	SGD = 'SGD',
	AdamW = 'AdamW',
	SGDW = 'SGDW',
}

export const getOptimizerValues = () => {
	return Object.values(Optimizers);
};

export default Optimizers;
