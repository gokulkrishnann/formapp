import { FunctionComponent } from 'react';
import FormInput from '../FormInput';
import { GET_USERS } from '../../graphql/queries';
import { Query, QueryResult } from 'react-apollo';
import LoadingIndicator from '../LoadingIndicator';

type UserListProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  selectedUser: any;
  errorMessage: string;
};

const UserList: FunctionComponent<UserListProps> = ({
  handleChange,
  id,
  selectedUser,
  errorMessage
}) => {
  return (
    <Query query={GET_USERS}>
      {(result: QueryResult) => {
        const { loading, error, data } = result;

        if (loading) return <LoadingIndicator>Loading...</LoadingIndicator>;
        if (error) return <p>Error!</p>;

        return (
          <FormInput
            type="dropdown"
            name="user"
            placeholder="Select user"
            onChange={handleChange}
            label="User"
            options={data.users}
            id={id}
            value={selectedUser.name}
            errorMessage={errorMessage}
          />
        );
      }}
    </Query>
  );
};

export default UserList;
