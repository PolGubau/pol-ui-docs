const code = `
import { Progress, RoundedSizesEnum } from "pol-ui";

const ProgressComponent = () => {
  return (
    <div className="flex gap-4 flex-col">
      {Object.keys(RoundedSizesEnum).map((r) => (
        <Progress progress={45} rounded={r} label={r} key={r} />
      ))}
    </div>
  );
};
export default ProgressComponent;
`;
export default code;
