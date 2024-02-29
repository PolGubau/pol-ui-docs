const code = `
import { Rating, Progress } from "pol-ui";
export const MoreDetails = (): JSX.Element => (
  <div className="flex flex-col gap-4 w-full">
    <Rating />
    <section className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        5 stars
        <Progress progress={85} className="w-[400px]" size={'lg'} />
        2174 votes
      </div>
      <div className="flex gap-2 items-center">
        4 stars
        <Progress progress={42} className="w-[400px]" size={'lg'} />
        1234 votes
      </div>
      <div className="flex gap-2 items-center">
        3 stars
        <Progress progress={6} className="w-[400px]" size={'lg'} />
        23 votes
      </div>
      <div className="flex gap-2 items-center">
        2 stars
        <Progress progress={12} className="w-[400px]" size={'lg'} />
        432 votes
      </div>
      <div className="flex gap-2 items-center">
        1 stars
        <Progress progress={23} className="w-[400px]" size={'lg'} />
        432 votes
      </div>
    </section>
  </div>
)
`;
export default code;
