import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ComingSoon = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Coming Soon ☺️
      </div>
      <Confetti width={width} height={height} />
    </>
  );
};

export default ComingSoon;
