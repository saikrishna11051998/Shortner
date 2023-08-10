import React, { useState } from 'react';
import './LinkShortener.css';
import axios from 'axios';

function LinkShortener() {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleShorten = async () => {
        try {
            const response = await axios.post('/shorten', longUrl);
            setShortUrl(response.data);
        } catch (error) {
            console.error('Error shortening URL:', error);
        }
    };

    return (
        <div className="link-shortener-container">
            <h2>Link Shortener</h2>
            <input
                type="text"
                value={longUrl}
                onChange={e => setLongUrl(e.target.value)}
                placeholder="Enter a long URL"
            />
            <button onClick={handleShorten}>Shorten</button>
            {shortUrl && (
                <div className="short-url">
                    <p>Short URL:</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                </div>
            )}
        </div>
    );
}

export default LinkShortener;
