const code = `
import { Modal, Button, useBoolean, Input, Checkbox, PasswordInput } from "pol-ui";
const ModalComponent = () => {
  const { value, setTrue, setFalse } = useBoolean(false);

  return (
    <>
      <Button
        onClick={() => {
          setTrue()
        }}
      >
        Toggle modal
      </Button>
      <Modal
        onClose={() => {
          setFalse()
        }}
        show={value}
      >
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create an account</h3>
          <Input label="Email" id="email" placeholder="name@company.com" required />
          <PasswordInput label="Password" id="password" required />
          <Checkbox id="remember" label="Remember me" />
          <Button>Log in to your account</Button>
        </div>
      </Modal>
    </>
  )
};
export default ModalComponent;
`;
export default code;
