import { FC } from "react"
import { PaginationEntity } from "../types/Entity"

interface PaginationProps {
  entity: PaginationEntity
}

const Pagination: FC<PaginationProps> = ({ entity }) => {
  return (
    <h2>{`Pagination for ${entity}`}</h2>
  )
}

export default Pagination