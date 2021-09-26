export const numberWithoutSpacesRegExp = new RegExp('^[0-9]{1,5}$');

export const floatWithoutSpacesRegExp = new RegExp('^([1-9]\\d*(\\.|\\,)\\d*|0?(\\.|\\,)\\d*[1-9]\\d*|[1-9]\\d*)$');

export const secondDivisionTupleRegExp = new RegExp('^[0-9]{1,3}[\n\t\r ]*,[\n\t\r ]*[0-9]{1,3}$');

export const thirdDivisionTupleRegExp = new RegExp('^[0-9]{1,3}[\n\t\r ]*,[\n\t\r ]*[0-9]{1,3},[\n\t\r ]*[0-9]{1,3}$');

export const passwordValidationRegExp = new RegExp('^(?=.*\\d)(?=.*[a-zA-Z])(?=.*([^\\w\\d\\s]|_)).{8,72}$');

const ErrorInputClass = '.Mui-error';
export const hasErrorInputComponents = (element: HTMLElement) => {
	const errorInputs = element.querySelector(ErrorInputClass);
	return errorInputs != null;
};
