import { FlapperSpinner } from "react-spinners-kit";

export default function CardLoading() {
  return (
    <div className="">
      <FlapperSpinner size={40} color={"#FD4A60"} loading={true} />
    </div>
  );
}
