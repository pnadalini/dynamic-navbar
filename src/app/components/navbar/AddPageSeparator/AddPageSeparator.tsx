import { PlusIcon } from "@heroicons/react/24/outline";

interface Props {
  onAddClick: () => void;
}

const AddPageSeparator = ({ onAddClick }: Props) => {
  return (
    <div className="z-0 group relative flex items-center justify-center">
      <div className="relative border-silver border border-dashed w-5 group-hover:w-14 transition-all duration-300" />

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          className="bg-white rounded-full p-[0.2rem] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-border cursor-pointer"
          onClick={onAddClick}>
          <PlusIcon className="size-2 text-black" />
        </button>
      </div>
    </div>
  );
};

export default AddPageSeparator;
