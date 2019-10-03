workflow "Publish on Netlify" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "netlify/actions/cli@master"
  args = "deploy --dir=build/docs --functions=functions"
  secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]
}

workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@f11f0a33bb81074e6448ed3737cbc6ca4e1318d2"
  runs = "npm i"
}
