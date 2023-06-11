# quickOpenLazygit
quick open lazygit  geek
## Why

Vscode itself can quickly open external terminal, but does not support args passing.
For example, enter `ls` or blabla when opening terminal
What I need is to run `lazygit` when I open the external terminal
Open lazyGit with shortcut
So this plugin was written to meet the need

The implementation principle is very simple, internal through `exec` to execute shell script
The `ttab` cli tool is used to open Terminal, so you need to make sure that `ttab` is installed when using this plug

## Usage

1. first you must be install [ttab](https://github.com/mklement0/ttab)
2. execute shortcut key `cmd+g o`

## Integrated vscode terminal

If you want to use the integrated vscode terminal, you can use the following command: `cmd+g l`
or by typing `quickOpenLazygit: Open lazygit in vscode terminal` in the command palette. This command will create
a new terminal and run `lazygit` in it. Once the terminal is created, subsequent calls to this command will focus
the existing terminal instead of creating a new one.

**Caveat**: The extension does not know if the terminal is actually running `lazygit` or not. If you manually close `lazygit`, the extension will still think that the terminal is running `lazygit` and will focus it instead of creating a new one.

## Settings

- `quickOpenLazygit.useiTerm`: use iTerm2 instead of Terminal.app on macOS. (default: `false`)
- `quickOpenLazygit.lazygitPath`: path to lazygit executable (default: `lazygit`)

## Issues
Iterm may not work if you don't open it in advance
You can open iterm and try again
