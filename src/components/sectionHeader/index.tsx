import { SectionHeaderProps } from "./sectionHeader.interface";

const SectionHeader = ({ title }:SectionHeaderProps) => {
    return (
      <div className="flex items-center text-right" dir="rtl">
       <div className="w-1 h-4 bg-[#c6c6c6] ml-2"></div>
        <h2 className="text-lg font-semibold text-red-600">{title}</h2>
      </div>
    );
  };
  
  export default SectionHeader;