 # AWS-Student-Community-Day

Welcome to the AWS-Student-Community-Day website repository! This repository contains the code for the website designed for the AWS-Student-Community-Day event.

## Visit the website :
https://payalnarwal.github.io/AWS-Student-Community-Day/

## About

The AWS-Student-Community-Day is an event hosted at IGDTUW, Delhi focused on bringing together enthusiasts, professionals, and experts in the field of Amazon Web Services (AWS). This website serves as a central hub for event details, schedules, speakers, and more.

## Features

- Overview of the AWS-Student-Community-Day event
- Information about keynote speakers and session details
- Venue location and date information
- Registration details and sign-up form
- Sections detailing the agenda, speakers, venue, and sponsors

## ✨ Task C: Smart Search — Real-time Speaker Filtering

### What I built
A live search bar above the speakers section that filters cards 
instantly as the user types — no page reload needed.

### Features
- 🔍 Real-time filtering across name, role, and talk topic
- ✕ One-click clear button to reset search
- 📊 Live result count ("Showing 3 of 9 speakers")
- 💬 "No results" message for unmatched queries
- 🎞️ Smooth fade-in animation on filtered cards
- Compatible with the existing scroll animation system

### Logic
- `DOMContentLoaded` attaches an `input` event listener to the search bar
- On each keystroke, `querySelectorAll(".speaker-card")` fetches all cards
- Each card's `h3` (name), first `p` (role/company), and second `p` (topic)
  are checked against the query using `.includes()`
- Non-matching cards get a `.hidden` class (`display: none !important`)
- A result counter updates dynamically with every keystroke