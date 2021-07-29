import Paddings from '../../../../../../core/Padding';
import Activations from '../../../../../../core/Activations';

const paddingPropertyCandidates = Array<string | number>();
export const getPaddingPropertyCandidates = () => {
  if(paddingPropertyCandidates.length !== 0){
    return paddingPropertyCandidates;
  }

  for (const paddingsKey in Paddings) {
    const key = paddingsKey as keyof typeof Paddings ;
    paddingPropertyCandidates.push(Paddings[key]);
  }

  return paddingPropertyCandidates;
}

const activationPropertyCandidates = Array<string | number>();
export const getActivationPropertyCandidates = () => {
  if(activationPropertyCandidates.length !== 0){
    return activationPropertyCandidates;
  }

  for (const activationsKey in Activations) {
    const key = activationsKey as keyof typeof Activations
    activationPropertyCandidates.push(Activations[key])
  }

  return activationPropertyCandidates;
}


