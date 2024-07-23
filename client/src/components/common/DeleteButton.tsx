interface DeleteButtonProps {
  onClick: () => void 
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <button className="entry-button" onClick={onClick}>
      <span className="material-symbols-outlined">close</span>
    </button>
  )
}

export default DeleteButton