import { Button, IconButton } from '@chakra-ui/button';
import { MyButton } from './Styled';

const FormButton = ({ onAdd, showAdd, text }) => (
  <div>
    <MyButton
      large
      onClick={onAdd}
      bg={!showAdd ? 'blue.500' : 'red.500'}
      textColor={!showAdd ? 'white' : 'black'}
    >
      {' '}
      {!showAdd ? (text = 'Form Button') : 'Close Form'}
    </MyButton>
  </div>
);

export default FormButton;
