const { App } = require("@slack/bolt");
let exampleJson = require("./example.json");

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

(async () => {
  let conversations = await app.client.conversations.list();

  for (let index = 0; index < exampleJson.channels.length; index++) {
    const element = exampleJson.channels[index];
    let slackChannel = conversations.channels.find(
      (c) => c.name === element.channel
    );

    if (slackChannel) {
      await app.client.chat.postMessage({
        channel: slackChannel.id,
        text: element.text,
      });
    }
  }
})();
