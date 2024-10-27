import { formatDistanceToNow } from "date-fns"

export const formateDate = (data) => {
  return (
    formatDistanceToNow(new Date(data), { addSuffix: true })
  )
}
