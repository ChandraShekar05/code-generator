// import { GoogleGenerativeAI } from '@google/generative-ai';

document.getElementById('start-recognition').addEventListener('click', () => {
    if (annyang) {
        annyang.setLanguage('en-IN'); // Set language to Indian English

        annyang.addCallback('result', (phrases) => {
            document.getElementById('text-area').value += phrases[0] + ' ';
        });

        annyang.addCallback('error', (error) => {
            console.error('Speech recognition error detected:', error);
            alert('Speech recognition error: ' + error.error);
            document.getElementById('listening-indicator').style.display = 'none';
        });

        annyang.addCallback('start', () => {
            document.getElementById('listening-indicator').style.display = 'block';
        });

        annyang.addCallback('end', () => {
            document.getElementById('listening-indicator').style.display = 'none';
        });

        annyang.start({ autoRestart: true, continuous: true });
    } else {
        console.error('Speech recognition is not supported in this browser.');
        alert('Speech recognition is not supported in this browser.');
    }
});

document.getElementById('start-synthesis').addEventListener('click', () => {
    const text = document.getElementById('text-area').value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN'; // Set language to Indian English
    window.speechSynthesis.speak(utterance);
});

document.getElementById('stop-synthesis').addEventListener('click', () => {
    window.speechSynthesis.cancel();
    if (annyang) {
        annyang.abort();
        document.getElementById('listening-indicator').style.display = 'none';
    }
});

document.getElementById('send-to-gemini').addEventListener('click', () => {
    const text = document.getElementById('text-area').value;
    sendTextToGemini(text);
});

async function sendTextToGemini(text) {
    console.log('Sending text to Gemini:', text);
    try {
        const response = await fetch(`/getGeminiResponse?query=${encodeURIComponent(text)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Response:', response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayGeminiResponse(data);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send text to Gemini.');
    }
}

function displayGeminiResponse(data) {
    const responseTextArea = document.createElement('textarea');
    responseTextArea.rows = 10;
    responseTextArea.cols = 50;
    responseTextArea.value = data.result; // Adjust based on the actual response structure
    document.body.appendChild(responseTextArea);
}