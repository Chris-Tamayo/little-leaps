import { createRef, useEffect, useState } from "react";
import DateDisplay from "../common/DateDisplay"
import SectionHeader from "../common/SectionHeader"
import BuildingHabitList from "./BuildingHabitList";
import AddButton from "../common/AddButton";
import EditForm from "../common/EditForm";

let nextId = 0;

const BuildingHabitSection = () => {
  const [habits, setHabits] = useState<{ id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }[]>([]);
  const [newHabitRef, setNewHabitRef] = useState<React.RefObject<HTMLInputElement> | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentHabit, setCurrentHabit] = useState<{ id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> } | null>(null);

  useEffect(() => {
    if (newHabitRef?.current) {
      newHabitRef.current.focus();
    }
  }, [newHabitRef]);

  const handleAddButtonClicked = () => {
    console.log("Add button clicked");

    const ref = createRef<HTMLInputElement>();
    const newHabits = habits.concat({ id: nextId, text: "", category: "None", days: ["Su", "M", "T", "W", "Th", "F", "Sa"], notes: "", done: false, inputRef: ref});
    setHabits(newHabits);

    // Increment entry id
    nextId++;

    // Set ref for focus
    setNewHabitRef(ref);
  }

  const handleEdit = (newHabit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => {
    console.log("Editing id: " + newHabit.id);
    const newHabits = habits.map((habit) => {
      if (habit.id === newHabit.id) {
        return newHabit;
      }
      return habit;
    });
    setHabits(newHabits);
  }

  const handleDelete = (id: number) => {
    console.log("Deleting id: " + id);
    const newHabits = habits.filter((habit) => habit.id !== id)
    setHabits(newHabits);
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentHabit(null);
  }

  const handleEditButtonClicked = (habit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => {
    setIsEditing(true);
    setCurrentHabit(habit);
  }

  const handleEditFormSubmitted = (habit: { id: number, text: string, category: string, days: string[], notes: string, done: boolean, inputRef: React.RefObject<HTMLInputElement> }) => {
    handleEdit(habit);
    setCurrentHabit(null);
  }

  const printList = () => {
    console.log("Printing...");
    habits.forEach((habit) => console.log(habit));
  }

  return (
    <section className="flex flex-col items-center w-full">
      {isEditing && currentHabit ? 
      <EditForm habit={currentHabit} onSubmit={handleEditFormSubmitted} onCancel={handleCancelEdit} />
      : 
      <div className="w-1/2">
        <DateDisplay />
        <SectionHeader 
          title="Building Habits" 
          description="Check off habits you complete!"
        />
        <BuildingHabitList habits={habits} onDelete={handleDelete} onEdit={handleEdit} onEditButtonClick={handleEditButtonClicked} />
        <AddButton onClick={handleAddButtonClicked} />
        {/* <button onClick={printList}>Print</button> */}
      </div>
      }
    </section>
  )
}

export default BuildingHabitSection;