import { useState } from "react"

interface EditFormProps {
  habit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> },
  onEdit: (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void,
  onCancel: () => void
  onSubmit: (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void
}

const EditForm = ( { habit, onEdit, onCancel, onSubmit }: EditFormProps) => {
  const [text, setText] = useState(habit.text);
  const [category, setCategory] = useState(habit.category);
  const [days, setDays] = useState(habit.days);
  const [notes, setNotes] = useState(habit.notes);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
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
          <input value={habit.text} placeholder="ex. Read 10 pages"></input>
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
            <button className="weekday">Su</button>
            <button className="weekday">M</button>
            <button className="weekday">T</button>
            <button className="weekday">W</button>
            <button className="weekday">Th</button>
            <button className="weekday">F</button>
            <button className="weekday">Sa</button>
          </div>
        </div>
        
        <div className="edit-element">
          <p>Notes</p>
          <input></input>
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