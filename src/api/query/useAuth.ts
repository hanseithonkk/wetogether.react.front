import { UseMutationResult, useMutation } from 'react-query';
import { useNavigate } from 'react-router';

import { RegisterFormValues, auth } from '../auth';

export const useAuth = ({ nickname }: RegisterFormValues): UseMutationResult => {
  const navigate = useNavigate();
  return useMutation('useAuth', () => auth({ nickname }), {
    onSuccess: () => {
      console.log(nickname);
      localStorage.setItem('nickname', nickname);
      navigate('/main');
    },
    onError: (err) => {
      console.log(err);
    },
    retry: 0,
  });
};
