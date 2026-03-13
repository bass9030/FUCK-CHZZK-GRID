#!/bin/bash
echo "Remove existing file"
rm ./FUCKGRID.zip
echo "Compressing file"
# Compress-Archive -Path .\*.* -CompressionLevel Optimal -DestinationPath FUCKGRID.zip
zip ./FUCKGRID.zip *.* -x build-extension.sh build-extension.ps1