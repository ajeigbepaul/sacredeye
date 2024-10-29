"use client"
import { cn } from "@/lib/utils";
import { useRouter} from "next/navigation";
interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  setTab: React.Dispatch<React.SetStateAction<boolean>>;
  tab: boolean;
}

// Define the structure for navItems

const NavModal = ({ onClose, setTab, tab }: AddCategoryModalProps) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const router = useRouter()
 

  return (
    <div
      className="fixed px-4 py-4 top-0 left-0 h-screen z-50 w-full bg-[#00000026] flex md:items-start md:justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={handleModalClick}
        className="w-full max-w-6xl mx-auto p-2 gap-4 md:mt-[50px] "
      >
        <div className="lg:w-[20%] md:w-[25%] w-[70%] bg-black rounded-full p-1 lg:ml-8 md:ml-4 ml-4">
          <button
            type="button"
            onClick={() => {
              setTab(true);
              router.replace("/")
            }}
            className={cn(
              "w-1/2 bg-black text-white font-satoshi font-medium p-2 rounded-full text-base",
              {
                "bg-white text-black": tab,
              }
            )}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              setTab(false);
              router.replace("/plan")
            }}
            className={cn(
              "w-1/2 bg-black text-white p-2 rounded-full font-satoshi font-medium text-base",
              {
                "bg-white text-black": !tab,
              }
            )}
          >
            Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
