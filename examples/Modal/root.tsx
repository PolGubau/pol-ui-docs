const code = `
import { Modal, Button, useBoolean } from "pol-ui";
const ModalComponent = () => {
  const { value, setTrue, setFalse } = useBoolean(false);

  return (
    <>
      <div className="flex">
        <Button onClick={setTrue}>Open modal</Button>
      </div>
      <Modal
        deleteButton
        {...props}
        onClose={() => {
          setFalse();
        }}
        show={value}
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">Terms of Service</h3>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply. The
            European Union’s General Data Protection Regulation (G.D.P.R.) goes
            into effect on May 25 and is meant to ensure a common set of data
            rights in the European Union. It requires organizations to notify
            users as soon as possible of high-risk data breaches that could
            personally affect them.
          </p>
          <footer className="flex gap-2 pt-4 ">
            <Button
              onClick={() => {
                alert("custom action");
                setFalse();
              }}
            >
              I accept
            </Button>
            <Button color="error" onClick={setFalse}>
              Decline
            </Button>
          </footer>
        </div>
      </Modal>
    </>
  );
};
export default ModalComponent;
`;
export default code;
