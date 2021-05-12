import renderer, { act, create } from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import UserList from '../components/UserList';

describe('User List', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  it('UserList should render without error', async () => {
    const mockChange = jest.fn();

    create(
      <MockedProvider>
        <UserList
          handleChange={mockChange}
          id="user"
          selectedUser={'user1'}
          errorMessage="Please select a user"
        />
      </MockedProvider>
    );
  });
});
