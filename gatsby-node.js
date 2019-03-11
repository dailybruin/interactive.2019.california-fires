const fetch = require('node-fetch').default
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const mapURL =
    'https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2019.california-fires/'
  const mapResponse = await fetch(mapURL)
  const mapJson = await mapResponse.json()
  const { data } = mapJson
  data['data.aml'].places.forEach(place => {
    return graphql(`
      {
        place(place: {eq: "${place.place}"}) {
          place
          features
        }
      }
    `).then(_ => {
      let firstWord = place.place.split(' ')[0]
      createPage({
        path: `place/${firstWord}`,
        component: path.resolve(`./src/templates/place.tsx`),
        context: {
          place: place.place,
          features: place.features,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          lux: require.resolve('@dailybruin/lux'),
        },
      },
    })
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /lux/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
