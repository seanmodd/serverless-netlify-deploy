import { Button, IconButton } from '@chakra-ui/button';

const hoverStyle = {
  boxShadow: '7px 7px 7px 7px  rgba(223, 3, 172, 0.2)',
  textShadow: '1px 1px #ff0000',
  transition: 'all .2s ease-out',
  background: '#62ff00',
  color: 'black',
  fontWeight: '400',
};
const pressedStyle = {
  background: '#0d00ff',
  color: '#ffff00',
  transition: 'all 0.6s ease-out',
  textShadow: '6px 6px #ff00ae',
  fontWeight: '400',
};

const FormButton = ({ onAdd, toggleForm, text }) => (
  <div>
    <Button
      transition="0.1s"
      boxShadow="3px 3px 3px 3px rgba(0, 0, 255, 0.2)"
      background="rgba(0,0,255,.9)"
      color="white"
      _hover={hoverStyle}
      _active={pressedStyle}
      onClick={toggleForm}
    >
      Add?
    </Button>
  </div>
);

export default FormButton;
