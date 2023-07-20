import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { RegisterFormValues, auth } from '../auth';
import { useNavigate } from 'react-router';

export const useAuth = ({ nickname }: RegisterFormValues): UseMutationResult => {
    const navigate = useNavigate();
    return useMutation('useAuth', () => auth({ nickname }), {
        retry: 0
    })

}