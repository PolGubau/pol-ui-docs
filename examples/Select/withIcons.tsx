const code = `
import { Select } from "pol-ui";
import { TbFlag } from "react-icons/tb";

export const SelectComponent = (): JSX.Element => {
  return (
    <Select id="countries" icons={TbFlag}>
      <option>United States</option>
      <option>Canada</option>
      <option>France</option>
      <option>Germany</option>
    </Select>
  );
};
`;
export default code;
