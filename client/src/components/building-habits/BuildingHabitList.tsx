import BuildingHabit from "./BuildingHabit";

interface BuildingHabitListProps {
  habits: { id: number, text: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }[],
  onDelete: (id: number) => void,
  onEdit: (newMotivation: { id: number, text: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => void
}

const BuildingHabitList = ( { habits, onDelete, onEdit }: BuildingHabitListProps) => {
  return (
    <div className="entry-section">
      {habits.map((habit) => 
        <BuildingHabit 
          key={habit.id} 
          id={habit.id} 
          text={habit.text} 
          done={habit.done}
          inputRef={habit.inputRef}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    </div>
  )
}

export default BuildingHabitList;