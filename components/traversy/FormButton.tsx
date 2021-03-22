import { Button, IconButton } from '@chakra-ui/button';
import { MyButton } from './Styled';

const FormButton = ({ onAdd, showAdd, text }) => (
  <div>
    <Button
      p="25px"
      m="15px"
      transition="0.1s"
      fontWeight="400"
      boxShadow="1px 1px 1px 1px rgba(0, 0, 255, 0.2)"
      background="rgba(0,0,255,.9)"
      color="white"
      _hover={{
        boxShadow: '6px 6px 6px 1px  rgba(223, 3, 172, 0.2)',
        transition: 'all .2s ease-out',
        background: '#ea0098',
        padding: '25px',
        margin: '15px',
        fontWeight: '300',
      }}
    >
      Form Button
    </Button>
  </div>
);

export default FormButton;
