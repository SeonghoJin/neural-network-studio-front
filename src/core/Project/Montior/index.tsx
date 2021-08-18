enum Monitor {
	Accuracy = 'accuracy',
	loss = 'loss',
	ValAccuracy = 'val_accuracy',
	valLoss = 'val_loss',
}

export const getMonitorValues = () => {
	return Object.values(Monitor);
};

export default Monitor;
