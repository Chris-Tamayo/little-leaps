interface SectionHeaderProps {
  title: string,
  description: string
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <>
      <h1 className="section-heading">{title}</h1>
      <p>{description}</p>
    </>
  )
}

export default SectionHeader