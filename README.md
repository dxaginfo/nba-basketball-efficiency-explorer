# NBA Basketball Efficiency Explorer

An interactive web application for visualizing and analyzing NBA player and team efficiency metrics, allowing basketball fans, analysts, and coaches to gain deeper insights into performance data.

## 🏀 Overview

The NBA Basketball Efficiency Explorer provides comprehensive tools for exploring efficiency metrics in basketball, helping users identify trends, compare players, and analyze team performance across various statistical categories. The application focuses on advanced metrics that go beyond traditional box scores to provide deeper insights into player impact and team effectiveness.

## ✨ Features

- **Player Efficiency Dashboard**: Visualize and compare individual player efficiency metrics
- **Team Efficiency Analysis**: Analyze team performance across various statistical categories
- **Efficiency Metrics Library**: Access to a wide range of advanced basketball metrics including:
  - Player Efficiency Rating (PER)
  - True Shooting Percentage (TS%)
  - Effective Field Goal Percentage (eFG%)
  - Usage Rate
  - Offensive and Defensive Rating
  - Win Shares
  - Box Plus/Minus (BPM)
  - Value Over Replacement Player (VORP)
- **Interactive Visualizations**: Dynamic charts and graphs for data exploration
- **Player Comparison Tools**: Side-by-side comparison of players across selected metrics
- **Historical Data Access**: View efficiency trends across seasons
- **Responsive Design**: Optimized for both desktop and mobile devices

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Data Visualization**: D3.js, Chart.js
- **State Management**: React Context API
- **Data Fetching**: Axios for API requests
- **Mock API**: JSON Server for development

## 📊 Data Sources

The application uses publicly available NBA statistics from reliable sources like:
- basketball-reference.com
- stats.nba.com
- External sports APIs (for demo purposes)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/nba-basketball-efficiency-explorer.git
cd nba-basketball-efficiency-explorer
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📝 Project Structure

```
nba-basketball-efficiency-explorer/
├── public/               # Static files
│   ├── data/             # Sample JSON data for development
│   └── index.html        # HTML template
├── src/                  # Source code
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable UI components
│   │   ├── charts/       # Visualization components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # Basic UI elements
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Application pages
│   ├── services/         # API services
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   └── index.tsx         # Application entry point
├── .gitignore            # Git ignore configuration
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## 📱 User Interface

The application features a clean, intuitive interface with:
- A navigation sidebar for accessing different sections
- Interactive dashboards with customizable charts
- Filter controls for refining data views
- Player/team search functionality
- Data export options

## 🔄 Future Enhancements

- User accounts with saved preferences
- Advanced filtering and sorting options
- More sophisticated statistical models
- Integration with live game data
- Custom metric creation tools
- Team lineup analysis

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for basketball analytics enthusiasts.