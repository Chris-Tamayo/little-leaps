import { useRef, useState } from "react";
import DeleteButton from "../common/DeleteButton"

interface MotivationProps {
  id: string,
  text: string,
  inputRef: React.RefObject<HTMLInputElement>,
  onDelete: (id: string) => void;
  onEdit: (newMotivation: { id: string, text: string, inputRef: React.RefObject<HTMLInputElement> }) => void;
  onUpdate: (id: string, text: string) => void;
}

const Motivation = ({ id, text, inputRef, onDelete, onEdit, onUpdate }: MotivationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [oldText, setOldText] = useState(text);

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
    } else {
      // Only update in database if text changed
      if (oldText !== text) {
        onUpdate(id, text);
      }
      setOldText(text);
    }
  }

  const handleChange = () => {
    if (inputRef.current !== null) {
      text = inputRef.current.value;
      onEdit({ id: id, text: text, inputRef: inputRef });
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
        value={text}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isHovered && <DeleteButton onClick={() => onDelete(id)}/>}
    </div>
  )
}

export default Motivation