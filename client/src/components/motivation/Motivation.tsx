import { useRef, useState } from "react";
import DeleteButton from "../common/DeleteButton"

interface MotivationProps {
  id: number,
  text: string,
  inputRef: React.RefObject<HTMLInputElement>,
  onDelete: (id: number) => void;
}

const Motivation = ({ id, text, inputRef, onDelete }: MotivationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      inputRef.current?.blur();
    }
  }

  const handleBlur = () => {
    if (inputRef.current?.value === "") {
      onDelete(id);
    }
  }

  return (
    <div 
      className="entry" 
      data-id={id} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <input 
        type="text" 
        className="entry-input" 
        placeholder="ex. I want to be a healthy eater"
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      {isHovered && <DeleteButton onClick={() => onDelete(id)}/>}
    </div>
  )
}

export default Motivation