import Motivation from "./Motivation"

interface MotivationListProps {
  motivations: { id: number, text: string, inputRef: React.RefObject<HTMLInputElement> }[],
  onDelete: (id: number) => void
}

const MotivationList = ( { motivations, onDelete }: MotivationListProps) => {
  return (
    <div className="entry-section">
      {motivations.map((motivation) => 
        <Motivation 
          key={motivation.id} 
          id={motivation.id} 
          text={motivation.text} 
          inputRef={motivation.inputRef}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}

export default MotivationList