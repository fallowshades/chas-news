import fsPromises from 'fs/promises'
import path from 'path'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'src/json/data.json')
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as json
  const objectData = JSON.parse(jsonData)

  return objectData
}

export async function getLocalDataID(id) {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'src/json/data.json')
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as json

  jsonData.filter((newsItem) => newsItem.article_id == id)
  const objectData = JSON.parse(jsonData)

  return objectData
}

export async function getAllLocalDataIDs() {
  // Get the path of the JSON file
  const filePath = path.join(process.cwd(), 'src/json/data.json')
  // Read the JSON file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as JSON
  const objectData = JSON.parse(jsonData)

  // Extract all unique IDs from the data
  const allIDs = objectData.map((newsItem) => newsItem.article_id)

  // Return unique IDs
  return [...new Set(allIDs)]
}
