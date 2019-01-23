const AWS = require('aws-sdk')
const { accessKeyId, secretAccessKey } = require('./awsconfig')
const dynamodb = new AWS.DynamoDB({ region: 'us-east-1', accessKeyId, secretAccessKey })
const { marshall } = AWS.DynamoDB.Converter

console.log('uploading')

exports.batchUpload = function batchUpload(array, tableName = 'quotations', batchSize = 20) {
  const batchParams = {
    RequestItems: {
      [tableName]: []
    }
  }

  const batch = Object.assign({}, batchParams)
  array.forEach((keyObject, i, arr) => {
    const Item = marshall(keyObject)
    const putReq = {
      PutRequest: {
        Item,
      }
    }

    batch.RequestItems[tableName].push(putReq)

    if ((i + 1) % batchSize === 0 || (i + 1) === arr.length) {
      flush({ batch, tableName })
      batch.RequestItems[tableName] = []
    }
  })
}

function flush({ batch, tableName }) {
  console.log(`flushing ${batch.RequestItems[tableName].length} items`)

  dynamodb.batchWriteItem(batch, function (err, data) {
    if (err) console.error(err)
    else console.log(data)
  })
}

// node.js usage... uncomment the following two lines and run `yarn upload`
// const marriageQuotations = require('./uploads/marriage')
// batchUpload(marriageQuotations)
