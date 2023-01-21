#!/bin/bash

git status
echo -e "\nEnter which files you wanna add to the stagging area : "
read STAG
git add $STAG
echo "Enter your message: "
read MESSAGE 
git commit -m "$MESSAGE"
git push origin main