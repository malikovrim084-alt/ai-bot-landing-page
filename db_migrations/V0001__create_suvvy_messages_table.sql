-- Создаём таблицу для хранения сообщений от Suvvy
CREATE TABLE IF NOT EXISTS suvvy_messages (
    id SERIAL PRIMARY KEY,
    chat_id VARCHAR(255) NOT NULL,
    message_type VARCHAR(50) NOT NULL DEFAULT 'text',
    message_sender VARCHAR(50) NOT NULL,
    text TEXT,
    file_url TEXT,
    file_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_suvvy_messages_chat_id ON suvvy_messages(chat_id);
CREATE INDEX idx_suvvy_messages_is_read ON suvvy_messages(is_read);