const template = `
{{#if compareUrl}}
# [v{{nextRelease.version}}]({{compareUrl}}) ({{datetime "UTC:yyyy-mm-dd"}})
{{else}}
# v{{nextRelease.version}} ({{datetime "UTC:yyyy-mm-dd"}})
{{/if}}

{{#with commits}}

{{#if boom}}
## 💥 Introducing breaking changes.
{{#each boom}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if sparkles}}
## ✨ Introducing new features.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if art}}
## 🎨 Improving structure / format of the .
{{#each art}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if zap}}
## ⚡️ Improving performance.
{{#each zap}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if fire}}
## 🔥 Removing  or files.
{{#each fire}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if bug}}
## 🐛 Fixing a bug.
{{#each bug}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if ambulance}}
## 🚑 Critical hotfix.
{{#each ambulance}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if pencil}}
## 📝 Writing docs.
{{#each pencil}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if rocket}}
## 🚀 Deploying stuff.
{{#each rocket}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if lipstick}}
## 💄 Updating the UI and style files.
{{#each lipstick}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if tada}}
## 🎉 Initial commit.
{{#each tada}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if white_check_mark}}
## ✅ Updating tests.
{{#each white_check_mark}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if lock}}
## 🔒 Fixing security issues.
{{#each lock}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if apple}}
## 🍎 Fixing something on macOS.
{{#each apple}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if penguin}}
## 🐧 Fixing something on Linux.
{{#each penguin}}
- {{> commitTemplate}}
{{/each}}
{{/if}}
{{#if checkered_flag}}
## 🏁 Fixing something on Windows.
{{#each checkered_flag}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if robot}}
## 🤖 Fixing something on Android.
{{#each robot}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if green_apple}}
## 🍏 Fixing something on iOS.
{{#each green_apple}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if bookmark}}
## 🔖 Releasing / Version tags.
{{#each bookmark}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if rotating_light}}
## 🚨 Removing linter warnings.
{{#each rotating_light}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if construction}}
## 🚧 Work in progress.
{{#each construction}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if green_heart}}
## 💚 Fixing CI Build.
{{#each green_heart}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if arrow_down}}
## ⬇️ Downgrading dependencies.
{{#each arrow_down}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if arrow_up}}
## ⬆️ Upgrading dependencies.
{{#each arrow_up}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if pushpin}}
## 📌 Pinning dependencies to specific versions.
{{#each pushpin}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if construction_worker}}
## 👷 Adding CI build system.
{{#each construction_worker}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if chart_with_upwards_trend}}
## 📈 Adding analytics or tracking code.
{{#each chart_with_upwards_trend}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if recycle}}
## ♻️ Refactoring .
{{#each recycle}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if whale}}
## 🐳 Work about Docker.
{{#each whale}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if heavy_plus_sign}}
## ➕ Adding a dependency.
{{#each heavy_plus_sign}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if heavy_minus_sign}}
## ➖ Removing a dependency.
{{#each heavy_minus_sign}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if wrench}}
## 🔧 Changing configuration files.
{{#each wrench}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if globe_with_meridians}}
## 🌐 Internationalization and localization.
{{#each globe_with_meridians}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if pencil2}}
## ✏️ Fixing typos.
{{#each pencil2}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if poop}}
## 💩 Writing bad  that needs to be improved.
{{#each poop}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if rewind}}
## ⏪ Reverting changes.
{{#each rewind}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if twisted_rightwards_arrows}}
## 🔀 Merging branches.
{{#each twisted_rightwards_arrows}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if package}}
## 📦 Updating compiled files or packages.
{{#each package}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if alien}}
## 👽 Updating  due to external API changes.
{{#each alien}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if truck}}
## 🚚 Moving or renaming files.
{{#each truck}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if page_facing_up}}
## 📄 Adding or updating license.
{{#each page_facing_up}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if bento}}
## 🍱 Adding or updating assets.
{{#each bento}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if ok_hand}}
## 👌 Updating  due to  review changes.
{{#each ok_hand}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if wheelchair}}
## ♿️ Improving accessibility.
{{#each wheelchair}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if bulb}}
## 💡 Documenting source .
{{#each bulb}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if beers}}
## 🍻 Writing  drunkenly.
{{#each beers}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if speech_balloon}}
## 💬 Updating text and literals.
{{#each speech_balloon}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if card_file_box}}
## 🗃 Performing database related changes.
{{#each card_file_box}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if loud_sound}}
## 🔊 Adding logs.
{{#each loud_sound}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if mute}}
## 🔇 Removing logs.
{{#each mute}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if busts_in_silhouette}}
## 👥 Adding contributor(s).
{{#each busts_in_silhouette}}
- {{> commitTemplate}}
{{/each}}
{{/if}}
{{#if children_crossing}}
## 🚸 Improving user experience / usability.
{{#each children_crossing}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if building_construction}}
## 🏗 Making architectural changes.
{{#each building_construction}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if iphone}}
## 📱 Working on responsive design.
{{#each iphone}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if clown_face}}
## 🤡 Mocking things.
{{#each clown_face}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if egg}}
## 🥚 Adding an easter egg.
{{#each egg}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if see_no_evil}}
## 🙈 Adding or updating a .gitignore file
{{#each see_no_evil}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if camera_flash}}
## 📸 Adding or updating snapshots
{{#each camera_flash}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if alembic}}
## ⚗ Experimenting new things
{{#each alembic}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if mag}}
## 🔍 Improving SEO
{{#each mag}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if wheel_of_dharma}}
## ☸️ Work about Kubernetes
{{#each wheel_of_dharma}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if label}}
## 🏷️ Adding or updating types (Flow, TypeScript)
{{#each label}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{/with}}
`;

const releaseRules = {
  major: [':boom:'],
  minor: [':sparkles:'],
  patch: [
    ':art:',
    ':zap:',
    ':fire:',
    ':bug:',
    ':pencil:',
    ':rocket:',
    ':lipstick:',
    ':tada:',
    ':white_check_mark:',
    ':lock:',
    ':apple:',
    ':penguin:',
    ':checkered_flag:',
    ':robot:',
    ':green_apple:',
    ':bookmark:',
    ':rotating_light:',
    ':construction:',
    ':green_heart:',
    ':arrow_down:',
    ':arrow_up:',
    ':construction_worker:',
    ':chart_with_upwards_trend:',
    ':recycle:',
    ':whale:',
    ':heavy_plus_sign:',
    ':heavy_minus_sign:',
    ':wrench:',
    ':pencil2:',
    ':poop:',
    ':rewind:',
    ':twisted_rightwards_arrows:',
    ':package:',
    ':alien:',
    ':truck:',
    ':page_facing_up:',
    ':bento:',
    ':ok_hand:',
    ':loud_sound:',
    ':mute:',
    ':wheel_of_dharma:',
  ],
};

module.exports = {
  // リリース対象ブランチを変更
  branch: 'release',

  plugins: [
    [
      'semantic-release-gitmoji',
      {
        releaseRules,
        releaseNotes: {
          template,
        },
      },
    ],
    '@semantic-release/github',
  ],
};
