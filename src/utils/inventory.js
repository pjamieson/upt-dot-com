// Functions to get and set a typerwriter's availability

export const getTypewriterAvailable = async (id) => {
  try {
    const response = await fetch(`${process.env.GATSBY_STRAPI_API_URL}/api/typewriters/${id}`)
    const result = await response.json()
    console.log('getTypewriterAvailable data', result.data.attributes.available)
    return (result.data.attributes.available)
  } catch (err) {
    console.log('getTypewriterAvailable err', err)
  }
  return 0
}

export const setTypewriterAvailable = async (id, available) => {
    try {
      await fetch(`${process.env.GATSBY_STRAPI_API_URL}/api/typewriters/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: `{
          "data": {
            "available":${available}
          }
        }`
      })
    } catch (err) {
      console.log("inventory setTypewriterAvailable err", err)
    }
}
