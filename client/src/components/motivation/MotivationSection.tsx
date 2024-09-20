import { createRef, useEffect, useState } from "react";
import AddButton from "../common/AddButton";
import SectionHeader from "../common/SectionHeader";
import DateDisplay from "../common/DateDisplay";
import MotivationList from "./MotivationList";
import { createMotivation, updateMotivation, deleteMotivation } from '../../services/motivationService.js';

let nextId = 0; // TODO: use current millis
const email = 'user@gmail.com';

const MotivationSection = () => {
  const [motivations, setMotivations] = useState<{ id: number, text: string, inputRef: React.RefObject<HTMLInputElement> }[]>([]);
  const [newMotivationRef, setNewMotivationRef] = useState<React.RefObject<HTMLInputElement> | null>(null);
  
  useEffect(() => {
    if (newMotivationRef?.current) {
      newMotivationRef.current.focus();
    }
  }, [newMotivationRef])

  const handleAddButtonClicked = async () => {
    console.log("Add button clicked");

    const ref = createRef<HTMLInputElement>();
    const newMotivations = motivations.concat({ id: nextId, text: "", inputRef: ref});
    setMotivations(newMotivations);

    // Create in database
    await createMotivation({email: email, motivationId: nextId, text: ""});

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

  const handleUpdate = async (id: number, text: string) => {
    // Update in database
    await updateMotivation({email: email, motivationId: id, text: text});
  }

  const handleDelete = async (id: number) => {
    console.log("Deleting id: " + id);
    const newMotivations = motivations.filter((motivation) => motivation.id !== id)
    setMotivations(newMotivations);

    // Delete in database
    await deleteMotivation({email: email, id: id});
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
        <MotivationList motivations={motivations} onDelete={handleDelete} onEdit={handleEdit} onUpdate={handleUpdate}/>
        <AddButton onClick={handleAddButtonClicked} />
        <button onClick={printList}>Print</button>
      </div>
    </section>
  )
}

export default MotivationSection