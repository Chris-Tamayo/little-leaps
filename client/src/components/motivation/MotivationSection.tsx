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
    const newMotivations = motivations.concat({ id: nextId, text: "", inputRef: ref});
    setMotivations(newMotivations);

    // Increment entry id
    nextId++;

    // Set ref for focus
    setNewMotivationRef(ref);
  }

  const handleEdit = (newMotivation: {id: number, text: string, inputRef: React.RefObject<HTMLInputElement>}) => {
    console.log("Editing id: " + newMotivation.id);
    const newMotivations = motivations.map((motivation) => {
      if (motivation.id === newMotivation.id) {
        return newMotivation;
      }
      return motivation;
    });
    setMotivations(newMotivations);
  }

  const handleDelete = (id: number) => {
    console.log("Deleting id: " + id);
    const newMotivations = motivations.filter((motivation) => motivation.id !== id)
    setMotivations(newMotivations);
  }

  const printList = () => {
    console.log("Printing...");
    motivations.forEach((motivation) => console.log(motivation));
  }

  return (
    <section className="flex justify-center w-full">
      <div className="w-1/2">
        <DateDisplay />
        <SectionHeader 
          title="Motivation" 
          description="What kind of person do you aspire to be?"
        />
        <MotivationList motivations={motivations} onDelete={handleDelete} onEdit={handleEdit}/>
        <AddButton onClick={handleAddButtonClicked} />
        <button onClick={printList}>Print</button>
      </div>
    </section>
  )
}

export default MotivationSection