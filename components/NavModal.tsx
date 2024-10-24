import { cn } from "@/lib/utils";
interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  setTab:React.Dispatch<React.SetStateAction<boolean>>;
  tab:boolean
}

// Define the structure for navItems

const NavModal = ({ onClose, setTab,tab }: AddCategoryModalProps) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  return (
    <div
      className="fixed px-4 py-4 top-0 left-0 h-screen z-50 w-full bg-[#00000026] flex md:items-start md:justify-center overflow-y-auto"
      onClick={onClose}
    >
        <div onClick={handleModalClick} className="lg:w-[20%] p-1 rounded-full bg-black gap-4 md:mt-[46px] mb-4 md:-ml-[57%]">
          <button
            type="button"
            onClick={() => setTab(true)}
            className={cn("w-1/2 bg-black font-satoshi font-medium p-2 rounded-full text-base", {
              "bg-white": tab,
            })}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => setTab(false)}
            className={cn("w-1/2 bg-black p-2 rounded-full font-satoshi font-medium text-base", {
              "bg-white": !tab,
            })}
          >
            Pricing
          </button>
        </div>
      </div>
  );
};

export default NavModal;
