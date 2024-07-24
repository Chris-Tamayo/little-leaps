interface EditButtonProps {
  onClick: () => void 
}

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <button className="entry-button" onClick={onClick}>
      <span className="material-symbols-outlined">edit</span>
    </button>
  )
}

export default EditButton;