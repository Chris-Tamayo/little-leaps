import BuildingHabit from "./BuildingHabit";

interface BuildingHabitListProps {
  habits: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }[],
  onDelete: (id: number) => void,
  onEdit: (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void
  onEditButtonClick: (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void
}

const BuildingHabitList = ( { habits, onDelete, onEdit, onEditButtonClick }: BuildingHabitListProps) => {
  return (
    <div className="entry-section">
      {habits.map((habit) => 
        <BuildingHabit 
          key={habit.id} 
          id={habit.id} 
          text={habit.text} 
          category={habit.category}
          days={habit.days}
          notes={habit.notes}
          done={habit.done}
          inputRef={habit.inputRef}
          onDelete={onDelete}
          onEdit={onEdit}
          onEditButtonClick={onEditButtonClick}
        />
      )}
    </div>
  )
}

export default BuildingHabitList;