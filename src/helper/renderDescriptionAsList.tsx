
export const renderDescriptionAsList = (description: string | string[] ) => {
    console.log(description); 
    if (!description) return null;
  
    if (Array.isArray(description)) {
      return (
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-[var(--text-color-primary)] text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
  
    
    if (typeof description === "string") {
      return (
        <ul className="list-disc list-inside">
          {description.trim().split("\n").map((item, index) => (
            <li key={index} className="text-[var(--text-color-primary)] font-normal text-sm leading-8">
              {item.replace(/^-/, "").trim()}
            </li>
          ))}
        </ul>
      );
    }
  
    return null;
  };
  
  