// src/components/NonceaxisContainer.jsx
import React, { useState } from 'react';
import './NonceaxisContainer.css';

export const NonceaxisContainer = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            setItems([...items, {
                id: Date.now(),
                text: inputValue,
                timestamp: new Date().toISOString()
            }]);
            setInputValue('');
        }
    };

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <div className="nonceaxis-container">
            <div className="input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                    placeholder="Enter item..."
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div className="items-list">
                {items.length === 0 ? (
                    <p className="empty-message">No items yet. Add one above!</p>
                ) : (
                    items.map(item => (
                        <div key={item.id} className="item">
                            <span>{item.text}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
