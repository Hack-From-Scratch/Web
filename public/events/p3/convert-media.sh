#!/bin/bash

# 1. Create a new directory for the processed files so we don't overwrite originals
mkdir -p web_ready

# 2. Loop through every .mp4 and .mov file in the current directory
# Nullglob prevents the loop from running literally on "*.mp4" if none exist
shopt -s nullglob
for file in *.{mp4,mov}; do
    
    echo "========================================================="
    echo "🎬 CONVERTING: $file"
    echo "========================================================="

    # Extract the filename without the original extension
    # e.g., "video.mov" becomes "video"
    base_name="${file%.*}"
    
    # 3. The FFmpeg magic command
    ffmpeg -i "$file" \
           -c:v libx264 \
           -preset fast \
           -crf 23 \
           -pix_fmt yuv420p \
           -c:a aac \
           -b:a 192k \
           "web_ready/${base_name}.mp4"

    echo "✅ FINISHED: ${base_name}.mp4"
    
done

echo "🎉 ALL DONE! Your web-safe files are in the 'web_ready' folder."