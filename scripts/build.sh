#!/bin/bash

# Build script for badge-generator

echo "Building library..."
npm run build

echo "Building demo site..."
npm run build:demo

echo "Build complete!"