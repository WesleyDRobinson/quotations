// Working with Scans -- AWS Dynamo Developer Guide:
// https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.FilterExpression
// aws dynamodb scan \
// --table-name Movies \
// --projection-expression "title" \
// --filter-expression 'contains(info.genres,:gen)' \
// --expression-attribute-values '{":gen":{"S":"Sci-Fi"}}' \
// --page-size 100  \
// --debug
import AWS from "aws-sdk"

const { accessKeyId, secretAccessKey } = require("./awsconfig")
const dynamo = new AWS.DynamoDB({
  region: "us-east-1",
  accessKeyId,
  secretAccessKey
})
const { unmarshall } = AWS.DynamoDB.Converter

export default async function list(TableName = "quotations") {
  return new Promise((resolve, reject) => {
    const scanParams = {
      TableName,
    }
    dynamo.scan(scanParams, function (err, data) {
        if (err) reject(err) // an error occurred
        else resolve(data.Items.map(item => unmarshall(item))) // successful response
      }
    )
  })
}
