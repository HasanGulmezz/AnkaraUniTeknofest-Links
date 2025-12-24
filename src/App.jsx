import Header from "./components/Header";
import LinkCard from "./components/LinkCard";
import { profileData, linksData } from "./data/content";

function App() {
  return (
    <div className="h-screen w-full bg-white flex justify-center items-center font-sans overflow-hidden">      
      {/* Smart Container */}
      <div className="
        w-full
        bg-gradient-to-b from-[#7dc5f8] to-[#f96363]
        p-4
        min-h-screen
        overflow-y-auto
        
        max-w-[576px]

        min-[576px]:h-auto          
        min-[576px]:max-h-[90vh]
        min-[576px]:bg-gradient-to-b from-[#7dc5f8] to-[#f96363]
        min-[576px]:border-[2px]       
        min-[576px]:rounded-[2.5rem]   
        
        min-[576px]:shadow-xl

        scrollbar-hide
      ">
        
        {/* Header */}
        <Header data={profileData} />

        {/* Links */}
        <div className="flex flex-col gap-4 mt-6">
          {linksData.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;