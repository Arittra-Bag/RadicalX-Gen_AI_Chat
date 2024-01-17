export const callGoogleApi = async (userMessage) => {
    const apiKey = "AIzaSyDP2S0msFLcdaebwQqeZsfalL-kDRWSmYs"; // Replace with your actual API key
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [
                { parts: [{ text: userMessage }] }
            ]
        }),
    };

    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}`, requestOptions);
        const data = await response.json();

        console.log("API Data:", data); // Log the API data

        if (data && data.candidates && data.candidates.length > 0) {
            const content = data.candidates[0].content;
            return content.parts[0].text || "No response received"; // Assuming the response has a 'text' field
        } else {
            console.error('Unexpected API response structure:', data);
            return 'Error: Unexpected API response structure';
        }
    } catch (error) {
        console.error('Error:', error);
        return 'Error occurred'; // Handle errors appropriately
    }
};
