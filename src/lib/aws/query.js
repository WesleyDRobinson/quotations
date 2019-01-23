import AWS from "aws-sdk"

const { accessKeyId, secretAccessKey } = require("./awsconfig")
const dynamo = new AWS.DynamoDB({
  region: "us-east-1",
  accessKeyId,
  secretAccessKey
})
const { unmarshall } = AWS.DynamoDB.Converter

export default async function query(params, TableName = "quotations") {
  return new Promise((resolve, reject) => {
    const { subjects = ['marriage'] } = params
    const queryParams = {
      TableName,
      ExpressionAttributeValues: {
        ":subject": {
          "L": subjects.map(subject => ({ "S": subject })),
        }
      },
      KeyConditionExpression: "subjects = :subject",
      ProjectionExpression: "subscription"
    }
    dynamo.query(queryParams, function (err, data) {
      if (err)
        reject(err) // an error occurred
      else resolve(unmarshall(data.Item)) // successful response
    })
  })
}
