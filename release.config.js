module.exports = {
  plugins: [
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [],
          minor: [],
          patch: [
            ':art:',
            ':newspaper:',
            ':pencil:',
            ':memo:',
            ':zap:',
            ':fire:',
            ':books:',
            ':bug:',
            ':ambulance:',
            ':penguin:',
            ':apple:',
            ':checkered_flag:',
            ':robot:',
            ':green_ale:',
            ':tractor:',
            ':recycle:',
            ':white_check_mark:',
            ':microscope:',
            ':green_heart:',
            ':lock:',
            ':arrow_up:',
            ':arrow_down:',
            ':fast_forward:',
            ':rewind:',
            ':rotating_light:',
            ':lipstick:',
            ':wheelchair:',
            ':globe_with_meridians:',
            ':construction:',
            ':gem:',
            ':bookmark:',
            ':tada:',
            ':loud_sound:',
            ':mute:',
            ':sparkles:',
            ':speech_balloon:',
            ':bulb:',
            ':construction_worker:',
            ':chart_with_upwards_trend:',
            ':ribbon:',
            ':rocket:',
            ':heavy_minus_sign:',
            ':heavy_plus_sign:',
            ':wrench:',
            ':hankey:',
            ':leaves:',
            ':bank:',
            ':whale:',
            ':twisted_rightwards_arrows:',
            ':pushpin:',
            ':busts_in_silhouette:',
            ':children_crossing:',
            ':iphone:',
            ':clown_face:',
            ':ok_hand:',
            ':boom:',
            ':bento:',
            ':pencil2:',
            ':package:',
            ':alien:',
            ':truck:',
            ':age_facing_up:',
            ':busts_in_silhouette:',
            ':card_file_box:',
            ':loud-sound:',
            ':mute:',
            ':egg:',
            ':see-no-evil:',
            ':camera-flash:',
            ':alembic:',
            ':mag:',
            ':wheel-of-dharma:',
            ':label:',
          ],
        },
      },
    ],
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
};
