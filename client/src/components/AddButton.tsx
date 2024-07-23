interface AddButtonProps {
  onClick: () => void
}

const AddButton = ( { onClick }: AddButtonProps) => {
  return (
    <div className="flex justify-center">
      <button onClick={onClick} className="add-button">+</button>
    </div>
  )
}

export default AddButton