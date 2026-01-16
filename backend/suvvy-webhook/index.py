import json
import os

def handler(event: dict, context) -> dict:
    '''Webhook для получения ответов от Suvvy и возврата их на сайт'''
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    # Проверяем секрет webhook (если настроен)
    webhook_secret = os.environ.get('SUVVY_WEBHOOK_SECRET', '')
    if webhook_secret:
        auth_header = event.get('headers', {}).get('authorization', '')
        expected_auth = f'Bearer {webhook_secret}'
        if auth_header != expected_auth:
            print(f'Unauthorized webhook attempt')
            return {
                'statusCode': 401,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Unauthorized'})
            }

    # Получаем данные от Suvvy
    try:
        body = json.loads(event.get('body', '{}'))
        event_type = body.get('event_type', '')
        
        # Тестовый запрос от Suvvy - просто возвращаем успех
        if event_type == 'test_request':
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'status': 'ok', 'message': 'Webhook works!'})
            }
        
        # Игнорируем все события кроме новых сообщений
        if event_type != 'new_messages':
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'status': 'ignored'})
            }
        
        # Получаем новые сообщения и chat_id
        new_messages = body.get('new_messages', [])
        chat_id = body.get('chat_id', '')
        
        print(f'Received {len(new_messages)} messages for chat {chat_id}')
        
        # Логируем полученные сообщения для отладки
        # В реальном приложении здесь можно сохранить в БД или отправить через WebSocket
        for msg in new_messages:
            msg_type = msg.get('type', 'text')
            sender = msg.get('message_sender', 'ai')
            
            if msg_type == 'text':
                text = msg.get('text', '')
                print(f'[{chat_id}] {sender}: {text}')
            else:
                file_info = msg.get('file', {})
                print(f'[{chat_id}] {sender} sent {msg_type}: {file_info.get("name", "file")}')
        
        # Возвращаем успех (статус 200-299 обязателен!)
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'status': 'ok',
                'received_messages': len(new_messages),
                'chat_id': chat_id
            })
        }
        
    except Exception as e:
        print(f'Webhook error: {str(e)}')
        # Даже при ошибке возвращаем 200, чтобы Suvvy не считал запрос неудачным
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'status': 'error', 'message': str(e)})
        }
