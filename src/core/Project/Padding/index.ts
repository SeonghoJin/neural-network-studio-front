enum Paddings {
	Valid = 'Valid',
	Same = 'Same',
}

export const getPaddingValues = () => {
	return Object.values(Paddings);
};

export default Paddings;
