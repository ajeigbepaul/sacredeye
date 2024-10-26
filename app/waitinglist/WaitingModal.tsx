import Image from "next/image";
import { cn } from "@/lib/utils";
interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: subLinkProps[];
}
// Define the structure of each sublink (inside subLinks)
interface subLinkProps {
  title: string;
  Icon: string;  // If the icon is a React component, you can refine this further to React.FC or JSX.Element
  link: string;
}

// Define the structure for navItems


const WaitingModal = ({ onClose, item }: AddCategoryModalProps) => {
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed px-4 py-4 top-0 left-0 h-screen z-50 w-full bg-[#00000026] flex md:items-start md:justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="flex flex-col bg-white rounded-[4px] w-full lg:max-w-xs md:max-w-md md:mt-24 -mt-52 md:-ml-40"
        onClick={handleModalClick}
      >
        <div
          className={cn(
            " p-2 px-4 z-50 transition-all duration-300 ease-in-out"
          )}
        >
          {" "}
          {item?.map((item: subLinkProps, idx: number) => (
            <div key={idx}>
              <a
                href={item.link}
                className="w-full flex items-center space-x-1"
              >
                <div className="flex w-8 h-10 rounded-full">
                  <Image
                    src={item?.Icon}
                    width={24}
                    height={24}
                    alt="sub-linkicons"
                  />
                </div>
                <span className="text-xs text-[#181818] font-medium">
                  {item?.title}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaitingModal;
