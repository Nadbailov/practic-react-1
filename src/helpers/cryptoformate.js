import { format } from "date-fns"

export const cryptoformate = (data) => {
    return (
      format(new Date(data), "Pp")
  )
}
