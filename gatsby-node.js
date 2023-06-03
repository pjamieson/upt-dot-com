//const redirects = require("./redirects.json")
exports.createPages = async ({ graphql, actions }) => {
/*
  const { createRedirect } = actions
	redirects.forEach(redirect =>
		createRedirect({
	    fromPath: redirect.fromPath,
	    toPath: redirect.toPath,
      isPermanent: redirect.isPermanent,
	  })
	)
*/
  const { createPage } = actions
  const result = await graphql(
    `
    query GetAvailableItems {
      typewriters: allStrapiTypewriter(filter: {available: {eq: true}}) {
        nodes {
          id
          year
          brand {
            slug
          }
          model {
            slug
          }
          sn
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const path = require('path')
   const typewriters = result.data.typewriters.nodes;

  // Create typewriter detail pages.
  typewriters.forEach((typewriter) => {
    createPage({
      path: `/${typewriter.year}-${typewriter.brand.slug}-${typewriter.model.slug}-${typewriter.sn}/`,
      component: path.resolve(`./src/templates/typewriter.js`),
      context: {
        id: typewriter.id,
      },
    })
  })

}
