import { useRouter } from 'next/router';
import { api } from '@/util/api';
import { useMutation } from 'react-query';

type Props = {
  answerRefetch: () => void;
};

/**
 * 답글 CRUD
 */
export const useAnswer = ({ answerRefetch }: Props) => {
  const router = useRouter();
  const { id } = router.query;

  const postAnswer = useMutation(
    ({ content }: { content: string }) => {
      if (router.asPath.includes('project')) {
        return api.post(`/answers`, {
          content,
          category: 'PROJECT',
          uniteId: id,
        });
      }
      return api.post(`/answers`, {
        content,
        category: 'COMMUNITY',
        uniteId: id,
      });
    },
    {
      onSuccess: () => {
        answerRefetch();
      },
      onError: () => {
        alert('잠시 후에 다시 시도해주세요.');
      },
    }
  );

  const deleteAnswer = useMutation(
    ({ answerId }: { answerId: number }) => api.delete(`/answers/${answerId}`),
    {
      onSuccess: () => {
        answerRefetch();
      },
      onError: () => {
        alert('잠시 후에 다시 시도해주세요.');
      },
    }
  );

  const editAnswer = useMutation(
    ({ answerId, content }: { answerId: number; content: string }) =>
      api.patch(`/answers/${answerId}`, { content }),
    {
      onSuccess: () => {
        answerRefetch();
      },
      onError: () => {
        alert('잠시 후에 다시 시도해주세요.');
      },
    }
  );

  return { postAnswer, deleteAnswer, editAnswer };
};
