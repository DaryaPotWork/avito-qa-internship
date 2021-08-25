# avito-qa-internship

<img src="slack-message.png" width="300"  />
<img src="slack-scope.png" width="300"  />

Тестовое задание для QA-cтажёра

# Запуск

```
SLACK_SIGNING_SECRET="****" SLACK_BOT_TOKEN="****" node script.js
```

Необходимо написать программу для отправки сообщений в Slack. Программа должна принимать на вход json-файл (формат представлен в example.json) и отправлять текстовые сообщения в каналы из этого json-файла.

Небольшой гайд, что потребуется сделать:

1. Зарегистрироваться в Slack
2. Создать workspace
3. Создать три открытых канала “test1”, ”test2”, “test3”
4. Создать приложение (бота) для отправки сообщений из json-файла в каналы (может помочь https://api.slack.com/)
5. Написать программу, которая будет взаимодействовать с ботом, созданным в шаге 4 (язык любой, golang будет плюсом)
6. Полученную программу запушить в публичный репозиторий, приложить инструкцию по запуску



# Ссылки

 - https://github.com/slackapi/node-slack-sdk
 - https://api.slack.com/methods/chat.postMessage
 - https://api.slack.com/methods/conversations.list