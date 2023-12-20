#!/bin/bash

# If the not file exists, check NODE_ENV.
if  [[ ! $NODE_ENV == "production" ]]; 
then
    source .env.local        
fi

# Use an if-else statement to check if the file exists.
if [ -f "./server/certificate/$CERTIFICATE_NAME" ]
then
    printf "> Certificate already exists.\n\n"
    sleep 2
else
#   Downloading certificate from appwrite.
    certificate=$(curl -o ./server/certificate/$CERTIFICATE_NAME "$NEXT_APPWRITE_URL/storage/buckets/$CONFIG_BUCKET_ID/files/$CERTIFICATE_FILE_ID/download" \
        -X GET \
        -H "Content-Type: application/json" \
        -H "X-Appwrite-Response-Format: 1.4.13" \
        -H "X-Appwrite-Project: $NEXT_APPWRITE_PROJECT" \
        -H "X-Appwrite-Key: $APP_WRITE_API_KEY")

    echo $certificate
fi
exit