import { FunctionComponent, useState } from 'react';
import Form from '../../components/Form';
import FormInput from '../../components/FormInput';
import UserList from '../../components/UserList';
import { Container, HeaderContainer, ButtonWrapper, Button } from './styles';
import { isEmpty } from '../../utils';
const FormContainer: FunctionComponent = () => {
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  });
  const [post, setPost] = useState({ userId: '', title: '', body: '' });
  const [errors, setErrors] = useState({ user: '', title: '', body: '' });

  const validateForm = () => {
    const fields = ['user', 'title', 'body'];
    const values = [post.userId, post.title, post.body];
    let errorList;
    for (let i = 0; i < fields.length; i++) {
      if (values[i] === '') {
        const error = validateField(fields[i], values[i]);
        errorList = { ...errorList, [Object.keys(error)[i]]: error[fields[i]] };
      }
    }
    setErrors(errorList);
  };

  const validateField = (fieldName: string, value: string) => {
    const errorDetails = { ...errors };
    switch (fieldName) {
      case 'user':
        errorDetails.user = value === '' ? 'Please select a user' : '';
        break;
      case 'title':
        errorDetails.title =
          value.length === 0 ? 'Title is required input' : '';
        break;
      case 'body':
        errorDetails.body = value.length === 0 ? 'Body is required input' : '';
        break;
      default:
        break;
    }
    return errorDetails;
  };

  const resetHandler = () => {
    setPost({ userId: '', title: '', body: '' });
    setErrors({ user: '', title: '', body: '' });
    setSelectedUser({ id: '0', name: 'Select a user' });
  };

  const validateHandler = () => {
    validateForm();
    if (isEmpty(errors)) {
      return;
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    const field = event.target;
    const { name, value } = event.target;
    const errors = validateField(name, value);
    setErrors(errors);
    if (field.selectedIndex) {
      setSelectedUser((prevState) => ({
        ...prevState,
        id: field.children[field.selectedIndex].id,
        [name]: value
      }));
      setPost((prevState) => ({
        ...prevState,
        userId: field.children[field.selectedIndex].id
      }));
    } else {
      setPost((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  return (
    <Container>
      <HeaderContainer>
        <h2>Create Post</h2>
      </HeaderContainer>
      <Form formData={post} onSubmit={validateHandler}>
        <UserList
          handleChange={handleChange}
          id={selectedUser.id}
          selectedUser={selectedUser.name}
          errorMessage={errors && errors.user !== '' && errors.user}
        />
        <FormInput
          type="textbox"
          name="title"
          onChange={handleChange}
          value={post.title}
          label="Title"
          errorMessage={errors && errors.title !== '' && errors.title}
        />
        <FormInput
          type="textbox"
          name="body"
          onChange={handleChange}
          value={post.body}
          label="Body"
          errorMessage={errors && errors.body !== '' && errors.body}
        />
        <ButtonWrapper>
          <Button type="submit" className="submit">
            Submit
          </Button>
          <Button type="reset" className="reset" onClick={resetHandler}>
            Reset
          </Button>
        </ButtonWrapper>
      </Form>
    </Container>
  );
};

export default FormContainer;
