# Speech to Text and Text to Speech with Google Generative AI Integration

This project demonstrates a simple web application that converts speech to text and text to speech using the `annyang` library. Additionally, it integrates with Google Generative AI to generate content based on the text input.

## Features

- **Speech to Text**: Converts spoken words into text.
- **Text to Speech**: Converts text into spoken words.
- **Send Text to Google Generative AI**: Sends the text input to Google Generative AI and displays the generated content.

## Prerequisites

- Node.js and npm installed on your machine.
- A valid Google API key with access to the Google Generative Language API.

## Setup

1. **Clone the Repository**

    ```sh
    git clone https://github.com/ChandraShekar05/code-generator.git
    cd your-repo
    ```

2. **Install Dependencies**

    ```sh
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory and add your Google API key:

    ```properties
    GOOGLE_API_KEY=your_actual_google_api_key_here
    ```

4. **Start the Server**

    ```sh
    node app.js
    ```

## Project Structure

- `index.html`: The main HTML file that contains the UI elements.
- `index.js`: The JavaScript file that handles speech recognition, text-to-speech, and communication with the server.
- `app.js`: The server-side code that handles requests to Google Generative AI.
- `.env`: The file containing environment variables (not included in the repository).

## How to Run

1. **Start the Server**

    Ensure the server is running by executing:

    ```sh
    node app.js
    ```

2. **Open the HTML File**

    Open `index.html` in your web browser.

3. **Use the Application**

    - Click on "Start Speech to Text" to start converting speech to text.
    - Click on "Start Text to Speech" to convert the text in the textarea to speech.
    - Click on "Stop Text to Speech" to stop the text-to-speech conversion.
    - Click on "Send Text to Gemini" to send the text to Google Generative AI and display the generated content.

## Troubleshooting

- **API Key Issues**: Ensure that the API key in your `.env` file is correct and has the necessary permissions.
- **Server Errors**: Check the server logs for any errors and ensure that the Google Generative Language API is enabled for your project.
