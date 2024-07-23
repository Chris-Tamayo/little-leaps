import { createRef, useEffect, useState } from "react";
import Motivation from "./Motivation";
import AddButton from "../common/AddButton";
import SectionHeader from "../common/SectionHeader";
import DateDisplay from "../common/DateDisplay";
import MotivationList from "./MotivationList";

let nextId = 0;

const MotivationSection = () => {
  const [motivations, setMotivations] = useState<{ id: number, text: string, inputRef: React.RefObject<HTMLInputElement> }[]>([]);
  const [newMotivationRef, setNewMotivationRef] = useState<React.RefObject<HTMLInputElement> | null>(null);
  
  useEffect(() => {
    if (newMotivationRef?.current) {
      newMotivationRef.current.focus();
    }
  }, [newMotivationRef])

  const handleAddButtonClicked = () => {
    console.log("Add button clicked");

    const ref = createRef<HTMLInputElement>();
    const newMotivations = motivations.concat({ id: nextId, text: "Test", inputRef: ref});
    setMotivations(newMotivations);

    // Increment entry id
    nextId++;

    // Set ref for focus
    setNewMotivationRef(ref);
  }

  const handleDelete = (id: number) => {
    console.log("Deleting id: " + id);
    const newMotivations = motivations.filter((motivation) => motivation.id !== id)
    setMotivations(newMotivations);
  }

  return (
    <section className="flex justify-center w-full">
      <div className="w-1/2">
        <DateDisplay />
        <SectionHeader 
          title="Motivation" 
          description="What kind of person do you aspire to be?"
        />
        <MotivationList motivations={motivations} onDelete={handleDelete} />
        <AddButton onClick={handleAddButtonClicked} />
      </div>
    </section>
  )
}

export default MotivationSection