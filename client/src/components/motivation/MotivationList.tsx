import Motivation from "./Motivation"

interface MotivationListProps {
  motivations: { id: string, text: string, inputRef: React.RefObject<HTMLInputElement> }[],
  onDelete: (id: string) => void,
  onEdit: (newMotivation: { id: string, text: string, inputRef: React.RefObject<HTMLInputElement> }) => void
  onUpdate: (id: string, text: string) => void;
}

const MotivationList = ( { motivations, onDelete, onEdit, onUpdate }: MotivationListProps) => {
  return (
    <div className="entry-section">
      {motivations.map((motivation) => 
        <Motivation 
          key={motivation.id} 
          id={motivation.id} 
          text={motivation.text} 
          inputRef={motivation.inputRef}
          onDelete={onDelete}
          onEdit={onEdit}
          onUpdate={onUpdate}
        />
      )}
    </div>
  )
}

export default MotivationList