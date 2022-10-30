# Currency Exchanger

## Authored by: 
Quin Asselin, October 2022

***

## Table of Contents
1. [Repository Description](#description)
2. [Technologies Used](#tech)
3. [Setup Instructions](#setup)
4. [Known Bugs](#bugs)
5. [License Information](#license)

*** 

### Repository Description: {#description}
This project will accept an input and output currency as well as a starting amount of money from the user. After pressing submit, the chosen amount will be displayed to the user as a converted amount of the output currency.

This project was hand-built in tandem with a programming class taught by Epicodus. It contains use of JavaScript, HTML, and formatting from both custom CSS and Bootstrap. 

***

### Technologies Used: {#tech}
- Javascript
- HTML5
- CSS3
- Markdown Text
- Bootstrap 4.6.2
- Git
- Github
- ES Lint
- Babel Core 7.18.6
- Webpack 4.46
- Webpack CLI 3.3.12
- HTML Webpack Plugin 4.5.2
- Clean Webpack Plugin 3.0.0
- Webpack Dev Server 3.11.3
- CSS Loader 3.6
- Style Loader 1.3
- Currency Exchange API (v6)
***

### Setup Instructions: {#setup}
This project can be opened via cloning/downloading repository:
1. Download this repository from its Github Repository located [here.](https://github.com/Quin-Riley-A/currency-exchanger)
2. Locate the download destination folder on your local machine.
3. Unzip the downloaded folder if necessary.
4. Ensure all files are present from your download folder, namely:
- src folder:
  - css folder:
    - bootstrap.css
    - styles.css
  - utility folder:
    - currencyConvert.js
    - exchangeAPI.js
    - populateFormSelect.js
  - index.html
  - index.js
- .babelrc
- .eslintrc
- .gitignore
- package-lock.json
- package.json
- LICENSE
- README.md
- webpack.config.js

5. To allow this program to properly function, you will need to add your own exchange rate API key which can be done as follows:
  - Navigate to [exchangerate-api.com](https://www.exchangerate-api.com/)
  - Click on "Get Free Key" in the top left corner
  - Sign up for a free account using your preferred email and a password
  - Check your preferred email (first main, then spam if necessary) for a verification email activation link.
  - When you click this link, if it does not immediately take you to a page with "Your API Key" then follow this [link](https://app.exchangerate-api.com/dashboard) after successfully activating your account. Sign in as necessary.
  - On the dashboard page copy the bold faced API Key. It should look like a random series of letters and numbers
  - Return to the currency-exchanger working environment.
  - Create a file called '.env' in the root directory as a sibling to this 'README.md' (the quotes are not necessary).
  - Edit the text of that file in a program such as VSCode to read as follows:
  ```code
  API_KEY=[your key from the exchange rate API dashboard]
  ```
  - (The key itself does not need to be wrapped in brackets or quotes etc.)

6. Navigate to your decompressed download destination folder within the terminal and run the following command to install dependencies:
```bash
npm install
```

7. Following this, use the following command to generate a bundled package containing the working html file:
```bash
npm run build
```

8. Next, to set up a development server, within the same directory run the following command in your terminal:
```bash
npm run start
```

9. Alternatively to step 7: After step 6 is successfully completed, navigate to the dist folder within the root directory and open the index.html file in your preferred web browser.
  * Note that by opening the program directly from the dist/index.html no changes made to the code while the webpage is opened will be registered. To register the effects of changes on the browser steps 7 and 9 will need to be repeated.

***

### Known Bugs: {#bugs}
In the event that disallowed values are entered into the form, or the API request URL is adjusted the program may return an error message in place of the intended conversion result.

The program is limited by the total number of API calls the service will allow a user to submit over the course of a month. In the event the user would like more they'll have to explore additional options from within the API.

Lastly, the program rounds currency conversions down to the next hundredth of a unit. That is to say for currencies that include denominations divided out to the thousandth the exchange rate and will have a diminished accuracy with regard to the number of milles.

 If you experience any of these issues, please message the producer of your current repository and include any relevant form/page information. Thank you for your patience as I work on any issues!

The page may experience formatting issues when opened on mobile devices or tablets/laptops in smaller windows. Page should still be legible but general project layout will shift in potentially unforeseen manner. Thus, it is recommended to open the HTML index page in browser or file explorer in as full a screen as hardware allows.

***

### License Information {#license}
*Quin Asselin, 2022. Available for distribution, modification, inspection, and application under [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)*