import * as vscode from "vscode";
import {execShell} from "./execShell";
import * as path from "path";
interface Config {
  useITerm: boolean;
}

/**
 * Creates a terminal instance with the given name if it doesn't exist yet.
 * Otherwise, it returns the existing terminal.
 *
 * @param name The name of the terminal to create
 * @returns A terminal instance
 */
function createInstance(name: string) {
    for (const terminal of vscode.window.terminals) {
        if (terminal.name === name) {
            return terminal;
        }
    }
    const terminal = vscode.window.createTerminal(name);
    terminal.sendText(name);
    return terminal;
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand("extension.quickOpenLazygitVscode", () => {
        const terminal = createInstance("lazygit");
        terminal.show(true);
        const maximize = vscode.workspace.getConfiguration().get("quickOpenLazygit.maximizeTerminalWindow")as boolean;
        if (maximize) {
            vscode.commands.executeCommand("workbench.action.toggleMaximizedPanel");
        }
    }));


    const quickOpenLazygit = vscode.commands.registerCommand(
        "extension.quickOpenLazygit",
    () => {
      try {
        const wf = vscode.workspace.workspaceFolders?.[0].uri.path || "/"
        const configuration: Config | undefined = vscode.workspace
          .getConfiguration()
          .get("quickOpenLazygit");
        if (configuration?.useITerm === true) {
          execShell(
            `cd ${wf} && ttab -a iTerm2 lazygit`
          );
        } else {
          execShell(`cd ${wf} && ttab lazygit`);
        }
      } catch (error) {
        vscode.window.showErrorMessage(JSON.stringify(error));
      }
    }
    );

  context.subscriptions.push(quickOpenLazygit);
}
