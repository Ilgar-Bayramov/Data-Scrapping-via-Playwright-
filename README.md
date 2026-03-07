# Data-Scrapping-via-Playwright-
This project scrapping some data from turbo.az. This project is for educational and experimental purposes only. It is recommended that you read the terms of use of the site before using it.

THIS README.md CREATED VIA AI.

TURBO.AZ DATA SCRAPER - PLAYWRIGHT
=========================================

This project automatically collects data from vehicle listings on the
turbo.az website.

📌 COLLECTED DATA:

-   Brand and model
-   Price
-   Year of manufacture
-   Engine volume
-   Mileage
-   City
-   Listing publication date

📌 FEATURES:

-   Automatically navigates through all pages (pagination)
-   Scrapes 24 listings on each page. However, if the number of listings
    is less than 24, it does not break the process. (This will be more
    useful for filtered searches.)
-   Writes the collected data to the “scrapped data.txt” file (you do
    not need to create the file beforehand).
-   During the scraping process, the console displays the current page
    numbers being scraped.
-   If the test is stopped, the data from the previous pages is not
    lost.

To use the last feature more efficiently, you can place that command
inside a for loop. Based on my device’s performance, I use it this way.

📁 FILE STRUCTURE:

root/ ├── tests/ │ └── main.spec.ts # Main scraping test file ├──
helper/ │ └── helper.ts # Helper functions (may be used in the next
update stage) ├── scrapped data.txt # File where collected data is
stored ├── playwright.config.ts # Playwright configuration (recommended
to keep default) ├── tsconfig.json # TypeScript configuration (required
for writing data to file) └── README.txt # This file

📌 Usage:

I will share the installation video on YouTube. When it is published, a
link will appear here instead of this line.

1.  Playwright installation and opening the project 1.1 Open the
    downloaded folder (the folder containing the files provided in this
    repo) in your IDE. I use Visual Studio Code. 1.2 In the VS Code
    terminal window, type “npm init playwright@latest” 1.3 Confirm all
    options by pressing Enter

2.  Other required configurations 2.1 If there are unrecognized modules
    in the tsconfig.json file, install them.

3.  Start the scraping process 3.1 In the terminal window type “npx
    playwright test –ui” and press Enter 3.2 In the opened Test UI
    window run the test (for the current folder it is named
    “main.spec.ts”)

4.  Maintenance 4.1 Monitor the processes in the Console window and stop
    them when necessary

IMPORTANT NOTE: If you need a limited number of pages, for example the
first 10 pages, you can use a for loop instead of “while (true)”.
Otherwise, you will need to manually control the process.

📌 NOTES:

-   You may see status errors such as 404 or 429 in the console. These
    are temporary server-side responses and do not affect the scraping
    process. There is no need to worry. If the processes are displayed
    in the console window, it means everything is working properly.

-   As scraping continues, messages like “visible: 1”, “visible: 2”, …
    will appear in the console. This shows which page is currently being
    scraped.

-   If there are not enough listings on a page, the message “All data
    has been added to array from page X.” will appear and the process
    will stop.

📄 OUTPUT FILE:

All data is written to the “scrapped data.txt” file, one line per
listing. The format is simple text and can be opened with any text
editor.

📌 REQUIREMENTS:

-   Node.js (v16 or higher)
-   Playwright
-   TypeScript

📃 IMPORTANT NOTE:

This project is intended for educational and practice purposes only.
Before using it, it is recommended that you read the website’s terms of
use.
