import { fetcher } from '../../utils'
import type { ApiContext } from 'types'

const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signout`,
    {
      method: 'POST',
      headers: {
        Accepct: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default signout
