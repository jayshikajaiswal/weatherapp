# 🌤️ Responsive Weather Application

A clean, modern, and highly responsive web application that provides real-time weather updates using HTML5, CSS3 (Bootstrap 5), and JavaScript (ES6+). The application fetches live data from the WeatherAPI endpoint to display comprehensive climate conditions for searched locations alongside a quick-glance global tracking table.

## ✨ Features

* *Real-Time Local Search:* Instant weather lookup for any city worldwide, rendering temperature, exact coordinates, and region details.
* *Dynamic Global Updates Table:* Automatically updates weather parameters (Country, Lat/Lon, Local Time) for key global cities (Boston, Rome, Paris, Beijing) concurrently whenever a new search or refresh is triggered.
* *Live Time Synchronization:* Displays the exact localized date and time tracking according to the selected destination's epoch time.
* *Parallel Data Fetching:* Utilizes JavaScript asynchronous Promise.all() structures to fetch multiple city statistics at once without lagging the user interface.
* *Interactive UI Utilities:* Includes a toggleable *Dark Mode* feature for seamless viewing in low-light environments and a fast "Refresh Data" utility.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Usage |
| :--- | :--- | :--- |
| *Frontend UI* | HTML5 & CSS3 | Semantic page layout and core component rendering. |
| *Styling Framework* | Bootstrap 5 | Handles grid alignments, modern input cards, and fully responsive tables. |
| *Logic Layer* | JavaScript (ES6) | Orchestrates asynchronous API operations, DOM injections, and event loops. |
| *Data Provider* | [WeatherAPI](https://www.weatherapi.com/) | Supplies real-time current conditions, location time zones, and geo-data. |

---

## 📸 Application Preview

| Desktop Workspace Dashboard |
| :---: |
| <img src="https://via.placeholder.com/800x450.png?text=Weather+App+Preview+Placeholder" width="100%" alt="Weather App Interface"/> |
| Features customizable main tracking blocks and dynamic batch-updating regional listings. |

