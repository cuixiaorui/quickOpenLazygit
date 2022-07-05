# quickOpenLazygit
quick open lazygit  geek
## Why

Vscode itself can quickly open external terminal, but does not support args passing.
For example, enter `ls` or blabla when opening terminal
What I need is to run `lazygit` when I open the external terminal
Open lazyGit with shortcut
So this plugin was written to meet the need

The implementation principle is very simple, internal through `exec` to execute shell script
The `ttab` cli tool is used to open Terminal, so you need to make sure that `ttab`` is installed when using this plug

## Usage

1. first you must be install [ttab](https://github.com/mklement0/ttab)
2. execute shortcut key `cmd+g o`

## Options
If you use `iTerm2` then you can configure it in "settings.json"
```
// settings.json
// default value is false
quickOpenLazygit.useiTerm = true
```

## Issues
Iterm may not work if you don't open it in advance
You can open iterm and try again
