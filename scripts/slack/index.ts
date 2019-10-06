// import { WebClient, Block } from '@slack/web-api';

// /**
//  * deploy 完了後の通知
//  */
// async function main(blocks: Block[], token: string) {
//   // const text = `
//   // ${process.env.GITHUB_WORKFLOW} - ${process.env.GITHUB_ACTION}
//   // ${process.env.TEXT}`;
//   const web = new WebClient(token);

//   await web.chat.postMessage({
//     channel: process.env.CHANNEL as string,
//     text: '',
//     blocks,
//   });
// }

// const blocks = [
//   {
//     type: 'section',
//     text: {
//       type: 'mrkdwn',
//       text: 'こんにちは世界:earth_asia: ',
//     },
//   },
//   {
//     type: 'context',
//     elements: [
//       {
//         type: 'plain_text',
//         text: 'https://www.dkrk-blog.net/',
//         emoji: true,
//       },
//     ],
//   },
// ];
// main(blocks, `${process.env.SLACK_TOKEN}`);
