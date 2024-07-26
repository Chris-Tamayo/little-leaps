import { useRef, useState } from "react";
import DeleteButton from "../common/DeleteButton"
import EditButton from "../common/EditButton";

interface BuildingHabitProps {
  id: number,
  text: string,
  category: string,
  days: string[],
  notes: string,
  done: boolean,
  inputRef: React.RefObject<HTMLInputElement>,
  onDelete: (id: number) => void;
  onEdit: (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void;
  onEditButtonClick: (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void;
}

const BuildingHabit = ({ id, text, category, days, notes, done, inputRef, onDelete, onEdit, onEditButtonClick }: BuildingHabitProps) => {
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
    } else {
      // TODO: Update text entry in database

    }
  }

  const handleCheckboxChange = () => {
    const updatedDone = !done;
    onEdit({ id: id, text: text, category: category, days: days, notes: notes, done: updatedDone, inputRef: inputRef });
    
    // TODO: Update text entry in database
    
  }

  const handleTextChange = () => {
    if (inputRef.current !== null) {
      text = inputRef.current.value;
      onEdit({ id: id, text: text, category: category, days: days, notes: notes, done: done, inputRef: inputRef });
    }
  }

  const handleEditButtonClicked = () => {
    onEditButtonClick({ id: id, text: text, category: category, days: days, notes: notes, done: done, inputRef: inputRef })
  }

  return (
    <div 
      className="entry" 
      data-id={id} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <input 
        className="entry-checkbox"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={done}
      />
      <input 
        type="text" 
        className={`entry-input ${done && "entry-done"}`}
        placeholder="ex. I want to be a healthy eater"
        value={text}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onChange={handleTextChange}
      />
      {isHovered && <EditButton onClick={handleEditButtonClicked} />}
      {isHovered && <DeleteButton onClick={() => onDelete(id)}/>}
    </div>
  )
}

export default BuildingHabit;