import { FunctionComponent, ReactNode } from 'react';
import { Mutation, MutationResult } from 'react-apollo';
import { ADD_POST } from '../../graphql/queries';
import LoadingIndicator from '../LoadingIndicator';
import { validate } from '../../utils';
import { Message, Info } from './styles';

type FormDataProps = {
  userId: string;
  title: string;
  body: string;
};
type FormProps = {
  children: ReactNode;
  formData: FormDataProps;
  onSubmit: () => void;
};

const Form: FunctionComponent<FormProps> = ({
  formData,
  children,
  onSubmit
}) => {
  const { userId, title, body } = formData;
  const newPost = formData;

  const submitHandler = (): boolean => {
    onSubmit();
    const checkAll = validate(userId, title, body);
    const isInvalid = Object.keys(checkAll).some((x) => checkAll[x]);
    return isInvalid;
  };

  return (
    <Mutation mutation={ADD_POST}>
      {(addPost, result: MutationResult) => {
        const { loading, data, error } = result;
        return (
          <form
            className="action-form"
            onSubmit={(e) => {
              e.preventDefault();
              const isInvalid = submitHandler();
              if (isInvalid) {
                return;
              }
              addPost({ variables: { newPost } });
            }}
          >
            {loading && <LoadingIndicator />}
            {children}

            <Message>
              {data && (
                <Info className="message">Form Submitted successfully</Info>
              )}
              {error && (
                <Info className="message">Error While Creating Post</Info>
              )}
            </Message>
          </form>
        );
      }}
    </Mutation>
  );
};

export default Form;
