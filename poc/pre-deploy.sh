#!/bin/bash
if  [[ ! $NODE_ENV == "production" ]]; then
    source .env
fi

certificate=$(curl -o ./certificate/$CERTIFICATE_NAME "$NEXT_APPWRITE_URL/storage/buckets/$CONFIG_BUCKET_ID/files/$CERTIFICATE_FILE_ID/download" \
    -X GET \
    -H "Content-Type: application/json" \
    -H "X-Appwrite-Response-Format: 1.4.13" \
    -H "X-Appwrite-Project: $NEXT_APPWRITE_PROJECT" \
    -H "X-Appwrite-Key: $APP_WRITE_API_KEY")

echo $certificate

exit