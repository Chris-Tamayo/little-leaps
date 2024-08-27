import { useState } from "react";
import "../../styles/EditForm.css";

interface EditFormProps {
  habit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> },
  onCancel: () => void
  onSubmit: (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void
}

const EditForm = ( { habit, onCancel, onSubmit }: EditFormProps) => {
  const [text, setText] = useState(habit.text);
  const [category, setCategory] = useState(habit.category);
  const [days, setDays] = useState(habit.days);
  const [notes, setNotes] = useState(habit.notes);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  }

  const handleDaysChange = (day: string) => {
    const newDays = [...days];

    if (!newDays.includes(day)) {
      newDays.push(day);
    } else {
      const index = newDays.indexOf(day);
      newDays.splice(index, 1);
    }

    setDays(newDays);
  }
  
  const handleSubmitButtonClicked = () => {
    const editedHabit = { id: habit.id, text: text, category: category, days: days, notes: notes, done: habit.done, inputRef: habit.inputRef };
    onSubmit(editedHabit);
  }

  return (
    <div id="edit-form" className="w-1/2">
      <h1 className="section-heading">Edit Habit</h1>
      <div>
        <div className="edit-element">
          <p>Habit Name</p>
          <input value={text} placeholder="ex. Read 10 pages" onChange={(e) => setText(e.target.value)}></input>
        </div>

        <div className="edit-element">
          <p>Category</p>
          <div>
            {["None", "Morning", "Afternoon", "Evening"].map((categoryChoice) => (
              <button
                key={categoryChoice}
                className={`category ${category === categoryChoice && "selected-category"}`}
                onClick={() => handleCategoryChange(categoryChoice)}
              >
                {categoryChoice}
              </button>
            ))}
          </div>
        </div>

        <div className="edit-element">
          <p>Repeat on</p>
          <div>
            {["Su", "M", "T", "W", "Th", "F", "Sa"].map((day) => (
              <button
                key={day}
                className={`weekday ${days.includes(day) && "selected-day"}`}
                onClick={() => handleDaysChange(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        
        <div className="edit-element">
          <p>Notes</p>
          <input value={notes} onChange={(e) => setNotes(e.target.value)}></input>
        </div>
        
        <div className="edit-element button-container">
          <button onClick={onCancel}>Cancel</button>
          <button className="submit-button" onClick={handleSubmitButtonClicked}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default EditForm