#!/bin/bash

# Test script for badge-generator

echo "Running tests..."
npm test

echo "Generating coverage report..."
npm run test:coverage