import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    '''API для общения с чат-ботом Suvvy'''
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    # Получаем данные
    body = json.loads(event.get('body', '{}'))
    user_message = body.get('message', '')
    user_name = body.get('name', 'Гость')
    user_phone = body.get('phone', '')
    session_id = body.get('session_id', '')

    if not user_message:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Message is required'})
        }

    # Получаем токен Suvvy
    suvvy_token = os.environ.get('SUVVY_API_TOKEN')
    
    if not suvvy_token:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Suvvy not configured'})
        }

    # Отправляем сообщение в Suvvy API (правильный endpoint)
    try:
        # Извлекаем токен из формата cc-xxxxx
        suvvy_url = f'https://www.suvvy.ai/api/dialogue/{suvvy_token}'
        
        # Формат для Suvvy: history_id для сохранения истории диалога
        payload = {
            'message': user_message,
            'history_id': session_id or f'chat-{user_phone}',
            'user_name': user_name,
            'user_phone': user_phone
        }
        
        data = json.dumps(payload).encode('utf-8')
        
        req = urllib.request.Request(
            suvvy_url,
            data=data,
            headers={
                'Content-Type': 'application/json'
            },
            method='POST'
        )
        
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            # Suvvy возвращает ответ в поле 'response' или 'text'
            bot_response = result.get('response', result.get('text', 'Спасибо за сообщение!'))
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'response': bot_response,
                    'session_id': payload['history_id']
                })
            }
            
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        print(f'Suvvy API error: {e.code} - {error_body}')
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'response': 'Спасибо за ваше сообщение! Наш менеджер свяжется с вами в ближайшее время.',
                'session_id': session_id
            })
        }
    except Exception as e:
        print(f'Error: {str(e)}')
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'response': 'Спасибо за сообщение! Мы скоро ответим.',
                'session_id': session_id
            })
        }