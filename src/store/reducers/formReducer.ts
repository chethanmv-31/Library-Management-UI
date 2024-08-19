import { UPDATE_FORM, RESET_FORM } from '../constants/formConstants';

interface FormState {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
};

const formReducer = (state = initialState, action: { type: string; payload?: Partial<FormState> }) => {
  switch (action.type) {
    case UPDATE_FORM:
      
      return { ...state, ...action.payload };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};

export default formReducer;
