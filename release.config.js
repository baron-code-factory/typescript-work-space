const template = `{{#if compareUrl}}
# [v{{nextRelease.version}}]({{compareUrl}}) ({{datetime "UTC:yyyy-mm-dd"}})
{{else}}
# v{{nextRelease.version}} ({{datetime "UTC:yyyy-mm-dd"}})
{{/if}}

{{#with commits}}
{{#if art}}
## 🎨 Improving structure / format of the .
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if zap}}
## ⚡️ Improving performance.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if fire}}
## 🔥 Removing  or files.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if bug}}
## 🐛 Fixing a bug.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if ambulance}}
## 🚑 Critical hotfix.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if sparkles}}
## ✨ Introducing new features.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if pencil}}
## 📝 Writing docs.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if rocket}}
## 🚀 Deploying stuff.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if lipstick}}
## 💄 Updating the UI and style files.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if tada}}
## 🎉 Initial commit.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if white_check_mark}}
## ✅ Updating tests.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if lock}}
## 🔒 Fixing security issues.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if apple}}
## 🍎 Fixing something on macOS.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if penguin}}
## 🐧 Fixing something on Linux.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if checkered_flag}}
## 🏁 Fixing something on Windows.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if robot}}
## 🤖 Fixing something on Android.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if green_apple}}
## 🍏 Fixing something on iOS.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if bookmark}}
## 🔖 Releasing / Version tags.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if rotating_light}}
## 🚨 Removing linter warnings.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if construction}}
## 🚧 Work in progress.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if green_heart}}
## 💚 Fixing CI Build.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if arrow_down}}
## ⬇️ Downgrading dependencies.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if arrow_up}}
## ⬆️ Upgrading dependencies.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if pushpin}}
## 📌 Pinning dependencies to specific versions.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if construction_worker}}
## 👷 Adding CI build system.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if chart_with_upwards_trend}}
## 📈 Adding analytics or tracking code.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{#if recycle}}
## ♻️ Refactoring .
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if whale}}
## 🐳 Work about Docker.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if heavy_plus_sign}}
## ➕ Adding a dependency.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if heavy_minus_sign}}
## ➖ Removing a dependency.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if wrench}}
## 🔧 Changing configuration files.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if globe_with_meridians}}
## 🌐 Internationalization and localization.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if pencil2}}
## ✏️ Fixing typos.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if poop}}
## 💩 Writing bad  that needs to be improved.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if rewind}}
## ⏪ Reverting changes.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if twisted_rightwards_arrows}}
## 🔀 Merging branches.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if package}}
## 📦 Updating compiled files or packages.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if alien}}
## 👽 Updating  due to external API changes.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if truck}}
## 🚚 Moving or renaming files.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if page_facing_up}}
## 📄 Adding or updating license.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if boom}}
## 💥 Introducing breaking changes.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if bento}}
## 🍱 Adding or updating assets.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if ok_hand}}
## 👌 Updating  due to  review changes.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if wheelchair}}
## ♿️ Improving accessibility.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if bulb}}
## 💡 Documenting source .
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if beers}}
## 🍻 Writing  drunkenly.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if speech_balloon}}
## 💬 Updating text and literals.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if card_file_box}}
## 🗃 Performing database related changes.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if loud_sound}}
## 🔊 Adding logs.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if mute}}
## 🔇 Removing logs.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if busts_in_silhouette}}
## 👥 Adding contributor(s).
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if children_crossing}}
## 🚸 Improving user experience / usability.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if building_construction}}
## 🏗 Making architectural changes.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if iphone}}
## 📱 Working on responsive design.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if clown_face}}
## 🤡 Mocking things.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if egg}}
## 🥚 Adding an easter egg.
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if see_no_evil}}
## 🙈 Adding or updating a .gitignore file
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if camera_flash}}
## 📸 Adding or updating snapshots
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if alembic}}
## ⚗ Experimenting new things
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if mag}}
## 🔍 Improving SEO
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if wheel_of_dharma}}
## ☸️ Work about Kubernetes
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}


{{#if label}}
## 🏷️ Adding or updating types (Flow, TypeScript)
{{#each sparkles}}
- {{> commitTemplate}}
{{/each}}
{{/if}}

{{/with}}
`;

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
            ':zap:',
            ':fire:',
            ':bug:',
            ':sparkles:',
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
            ':boom:',
            ':bento:',
            ':ok_hand:',
            ':loud_sound:',
            ':mute:',
            ':wheel_of_dharma:',
          ],
        },
        releaseNotes: {
          template,
        },
      },
    ],
    '@semantic-release/github',
  ],
};
