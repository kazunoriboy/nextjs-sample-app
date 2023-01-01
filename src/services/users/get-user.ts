import { fetcher } from '../../utils'
import type { ApiContext, User } from 'types'

export type GetUserParams = {
  id: number
}

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    },
  )
}

export default getUser
