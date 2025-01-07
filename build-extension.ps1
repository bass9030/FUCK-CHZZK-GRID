echo "Remove existing file"
del .\FUCKGRID.zip
echo "Compressing file"
Compress-Archive -Path .\*.* -CompressionLevel Optimal -DestinationPath FUCKGRID.zip