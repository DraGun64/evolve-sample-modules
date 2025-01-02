#!/bin/bash

# Run Prettier to format all TypeScript files in the project
npx prettier --write ./**/*.ts

# Wait for the user to press the Enter key
read -p "Press Enter to continue..."
