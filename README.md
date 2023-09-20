# **[American/British English Translator](https://eb-american-british-translator.onrender.com)**

The American/British English Translator is a web application that allows users to effortlessly translate text between American and British English. This versatile tool is built using [Node.js](https://nodejs.org/en/about), and [Express.js](https://expressjs.com/) for the backend, providing a seamless and user-friendly experience for language conversion.




## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Translate text from American English to British English or vice versa.
- Accurate translation of common words, phrases, and spelling variations.
- Real-time translation with highlighting of translated text.
- Supports translations for titles and time formats.
- User-friendly web interface with a clean and modern design.

## File Structure
The application's file structure includes the following **key** files and directories:

- `server.js`: Main entry point of the application. It sets up and configures the Express.js server, defines routes, and starts the server.
- `tests/assertion-analyser.js`: Module for analyzing test assertions.
- `tests/functional-tests.js`: Contains functional tests written using Mocha and Chai.
- `tests/test-runner.js`: Module for running tests.
- `tests/unit-tests.js`: Contains unit tests.

## Installation
To run the [American/British English Translator](https://eb-american-british-translator.onrender.com) locally, follow these steps:
1. Clone this repository to your local machine using:
    ```bash
    git clone https://github.com/erickfb5/american-british-translator.git
2. Navigate to the project directory:
   ```bash
   cd american-british-translator
3. Install the required dependencies:
   ```bash
   npm install
4. Rename the `sample.env` file to `.env` and update the required environment variables.   
5. Start the server:
   ```bash
   npm start
6. Once the server is running, you can use the [American/British English Translator](https://eb-american-british-translator.onrender.com) by opening your web browser and navigating to the **http://localhost:```PORT```/** defined in the ```.env``` file.

## Usage
- Enter the text you want to translate in the input textarea.
- Select the translation direction (American to British or British to American) from the dropdown menu.
- Click the "Translate" button to see the translated text with highlighted changes.
- Review the translated text in the output container.

## Technologies Used
The [American/British English Translator](https://eb-american-british-translator.onrender.com) utilizes the technologies and dependencies listed below to deliver its functionality:

- [Node.js](https://nodejs.org/en/about)
- [Express.js](https://expressjs.com)
- [Chai](https://www.chaijs.com/)
- [Date-fns](https://date-fns.org)

## Testing
The application includes a comprehensive testing suite with both _functional_ and _unit_ tests:

To run the tests, you can use the following command: **```npm test```**

## Contributing
If you would like to contribute to this project, please follow these guidelines:

- Fork the repository on GitHub.
- Make your changes and commit them to your fork.
- Create a pull request from your fork to this repository. 

# License
This project is licensed under the **[MIT License](https://spdx.org/licenses/MIT.html)**.