import React from 'react';
import { GPT4API } from 'gpt4-api-package';

const GPT4Integration = () => {
    const generateResponse = (input) => {
        try {
            const response = GPT4API.generateResponse(input);
            return response;
        } catch (error) {
            console.error('Error generating response:', error);
            return 'Sorry, I could not process your request at the moment.';
        }
    };

    return {
        generateResponse,
    };
};

export default GPT4Integration;