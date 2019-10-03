workflow "Publish on Netlify" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "netlify/actions/cli@master"
  args = "deploy --dir=site --functions=functions"
  secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]
}
