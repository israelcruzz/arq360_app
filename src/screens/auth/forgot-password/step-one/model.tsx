import { useState } from 'react';
import * as Yup from 'yup';

export const useForgotPasswordStepOne = () => {
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

  const validateFormSchema = Yup.object().shape({
    email: Yup.string().email().required('Campo obrigatório')
  })
}