import { useRef, useState } from "react";
import DeleteButton from "./DeleteButton"

interface MotivationProps {
  id: number,
  text: string,
  onDelete: (id: number) => void;
}

const Motivation = ({ id, text, onDelete }: MotivationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      inputRef.current?.blur();
    }
  }

  return (
    <div 
      className="entry" 
      data-id={id} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}>
      <input 
        type="text" 
        className="entry-input" 
        placeholder="ex. I want to be a healthy eater"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      {isHovered && <DeleteButton onClick={() => onDelete(id)}/>}
    </div>
  )
}

export default Motivation