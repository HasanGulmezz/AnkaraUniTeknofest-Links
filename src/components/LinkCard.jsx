import { incrementCount } from "../firebase";
const LinkCard = ({ link }) => {
  const handleClick = () => {
    incrementCount(link.title);
  };
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="
        relative
        flex items-center
        w-full
        p-2
        bg-white
        text-black
        
        border-[2px] border-black
        rounded-2xl
        
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        
        transition-all duration-200
        hover:translate-x-[2px] hover:translate-y-[2px]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[5px] active:translate-y-[5px]
        active:shadow-none
      "
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100">
        <img 
          src={link.image} 
          alt={link.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 text-center px-2">
        <span className="font-bold text-base block">
          {link.title}
        </span>
        {link.description && (
          <span className="text-xs text-gray-500 mt-1 font-medium leading-snug">
            {link.description}
          </span>
        )}
      </div>
    </a>
  );
};

export default LinkCard;