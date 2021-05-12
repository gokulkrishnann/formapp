import { create } from 'react-test-renderer';
import FormInput from '../components/FormInput';

describe('FormInput component', () => {
  test('Matches the snapshot', () => {
    const handleChange = jest.fn();
    const formInput = create(
      <FormInput
        type="textbox"
        name="title"
        onChange={handleChange}
        value=""
        label="Title"
        errorMessage={'Enter title'}
      />
    );
    expect(formInput.toJSON()).toMatchSnapshot();
  });
});
