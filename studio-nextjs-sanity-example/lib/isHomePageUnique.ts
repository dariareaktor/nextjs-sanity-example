import {CustomValidator} from 'sanity'

export const isHomePageUnique: CustomValidator = async (isHomePage, context) => {
  const {getClient} = context
  const client = getClient({apiVersion: '2024-01-01'})

  if (isHomePage) {
    const isDuplicate = await client.fetch(
      `count(*[_type == "page" && isHomePage == true && _id != $id]) > 0`,
      {id: context?.document?._id},
    )
    return isDuplicate ? 'Only one page can be marked as the home page.' : true
  }
  return true
}
