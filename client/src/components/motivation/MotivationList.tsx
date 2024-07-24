import Motivation from "./Motivation"

interface MotivationListProps {
  motivations: { id: number, text: string, inputRef: React.RefObject<HTMLInputElement> }[],
  onDelete: (id: number) => void,
  onEdit: (newMotivation: { id: number, text: string, inputRef: React.RefObject<HTMLInputElement> }) => void
}

const MotivationList = ( { motivations, onDelete, onEdit }: MotivationListProps) => {
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
        />
      )}
    </div>
  )
}

export default MotivationList