const Header = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-4">
      {/* Logo */}
      <div className=" p-1 rounded-full">
        <img 
          src={data.image} 
          alt={data.name} 
          className="w-28 h-28  object-cover"
        />
      </div>
      
      {/* Name */}
      <h1 className="text-[32px] font-bold text-black text-center leading-tight">
        {data.name}
      </h1>
        <div className="text-gray-600 text-center text-sm px-2">
        {data.bio.map((satir, index) => (
            <p key={index} className="min-h-[1.2em]">
            {satir}
            </p>
        ))}
        </div>
    </div>
  );
};

export default Header;