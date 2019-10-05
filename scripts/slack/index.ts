import { WebClient } from '@slack/web-api';

/**
 * deploy 完了後の通知
 */
(async function main() {
  const web = new WebClient(process.env.SLACK_TOKEN);

  const text = `
  ${process.env.GITHUB_WORKFLOW} - ${process.env.GITHUB_ACTION}
  ${process.env.TEXT}`;

  await web.chat.postMessage({
    text,
    channel: process.env.CHANNEL as string,
  });
})();
