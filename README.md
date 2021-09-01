# Active Stream API Coding Challenge

## Description

The API deals with the number of streams a particular user can have active at once.
A user may have up to 3 active streams per account. Any subsequent requests to initiate streams will be prevented.
A GET endpoint is present to view the number of streams a user currently has active.

## Installation

```bash
docker build -t codingtest .
```

## Run

```bash
docker run -p 49160:5003 -d codingtest
```

## Usage

```bash
#POST a stream for a user - deviceId is a required field (string)
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"deviceId":"123"}' \
  http://localhost:49160/api/users/{userId}/activeStreams
```

```bash
#Get Active Streams for user
curl http://localhost:49160/api/users/{userId}/activeStreams
```

## Future Improvements

Some outstanding tasks that would have been completed, given more time, include:

- Open API documentation.
- A retry/exponential back-off policy to control flow to the database.
- Authentication to ensure correct usage.
- Implemented as a Lambda function on AWS.

Scaling would be a big consideration for a critical API of this nature. An influx of users could occur at a given time, such as a sporting event. A poor scaling strategy would lead to users being unable to start a stream and missing the event altogether.
Services such as AWS API Gateway are designed to handle large burst of traffic and will scale alongside the Lambda Function and database.
