// https://github.com/vuejs/vue/blob/dev/scripts/verify-commit-msg.js
const fs = require('fs')
const commitMsg = fs.readFileSync('.git/COMMIT_EDITMSG', 'utf8')
// 自己提交的命令
const commitRE
    = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/
// pull 等命令是允许的
const mergeRE = /^(Merge pull request| Merge branch)/
console.log(commitMsg)
if (!commitRE.test(commitMsg)) {
  if (!mergeRE.test(commitMsg)) {
    console.log('commit message 不符合要求')
    console.log('具体规则请见scripts/verify-commit-msg.js')
    process.exit(1)
  }
}
