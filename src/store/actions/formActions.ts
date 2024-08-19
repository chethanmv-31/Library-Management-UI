import { UPDATE_FORM, RESET_FORM } from '../constants/formConstants';

export const updateForm = (formData: Partial<any>) => ({
  type: UPDATE_FORM,
  payload: formData,
});

export const resetForm = () => ({
  type: RESET_FORM,
});
