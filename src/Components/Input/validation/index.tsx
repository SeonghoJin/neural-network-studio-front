export const numberWithoutSpacesRegExp : RegExp
  = new RegExp('^[0-9]{1,5}$');

export const floatWithoutSpacesRegExp : RegExp
 = new RegExp('[0-9]+([.|,][0-9]+)?');

export const secondDivisionTupleRegExp : RegExp
  = new RegExp('^[0-9]{1,3}[\n\t\r ]*,[\n\t\r ]*[0-9]{1,3}$');

export const thirdDivisionTupleRegExp : RegExp
  = new RegExp('^[0-9]{1,3}[\n\t\r ]*,[\n\t\r ]*[0-9]{1,3},[\n\t\r ]*[0-9]{1,3}$');



