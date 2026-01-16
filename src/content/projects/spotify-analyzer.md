---
title: "Spotify Streaming Analyzer"
description: "Analyze 13+ years of Spotify listening history with interactive visualizations, artist comparisons, and personalized insights."
date: 2024-01-15
tags:
  - Python
  - Streamlit
  - Pandas
  - Altair
  - Data Visualization
image: "/images/projects/spotify-analyzer.png"
github: "https://github.com/mitchjohns97/claude_spotify"
live: ""
featured: true
---

## Overview

A comprehensive Spotify streaming history analyzer that transforms years of listening data into meaningful insights and beautiful visualizations. Built with Python and Streamlit, this tool lets you explore your music habits in ways Spotify Wrapped never could.

## Key Features

- **Multi-Person Comparison**: Compare listening habits across multiple people to discover shared artists, taste compatibility, and unique preferences
- **Deep Artist Analytics**: Dive into any artist with detailed stats, listening timelines, and track breakdowns
- **Music Trends**: Analyze listening patterns by time of day, day of week, and visualize with interactive heatmaps
- **Year-over-Year Comparison**: Compare any two years of listening history with detailed metrics and delta tracking
- **Album Completion Tracking**: See how much of each album you've actually listened to
- **Taste Twin Finder**: Discover who among your friends has the most similar music taste
- **Personalized Recommendations**: Get artist recommendations based on what your friends listen to that you haven't discovered yet
- **Artist Network Graph**: Visualize shared artists between listeners in an interactive network diagram

## Technical Details

### Tech Stack

- **Backend**: Python with Pandas for data processing
- **Frontend**: Streamlit for the interactive web interface
- **Visualization**: Altair for declarative statistical charts
- **Data**: Spotify Extended Streaming History (JSON export)

### Architecture

The app is structured into modular components:

```
src/
├── loader.py      # Data loading and preprocessing
├── analysis.py    # Statistical analysis functions
├── comparison.py  # Multi-person comparison features
├── enrichment.py  # Spotify API metadata integration
└── visualize.py   # Chart generation
```

## How It Works

1. **Export your data** from Spotify (Settings → Privacy → Request Data → Extended Streaming History)
2. **Load the JSON files** into the app
3. **Explore** your listening history through various visualizations and analyses

## Challenges & Learnings

Building this project involved several interesting challenges:

1. **Large Dataset Handling**: Processing 13+ years of streaming data (hundreds of thousands of records) required careful optimization with Pandas
2. **Multi-Person Comparisons**: Designing algorithms to meaningfully compare listening habits across different people with varying data sizes
3. **Interactive Visualizations**: Creating responsive, informative charts that work well with both small and large datasets

## Try It Out

The app is deployed on Streamlit Cloud - click the Live Demo button above to explore your own Spotify data!
