const code = `
import { Progress, ColorsEnum, Colors } from "pol-ui";

const ProgressComponent = () => {
  return  <div className="flex gap-4 flex-col">
    {Object.keys(ColorsEnum).map(color => (
      <Progress progress={45} color={color as Colors} label={color} key={color} />
    ))}
  </div>
};
export default ProgressComponent;
`;
export default code;
