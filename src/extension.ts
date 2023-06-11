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
        terminal.show();
    }));


    const quickOpenLazygit = vscode.commands.registerCommand(
        "extension.quickOpenLazygit",
    () => {
      try {
        
        // keep for legacy reasons
        const wf = vscode.workspace.workspaceFolders?.[0].uri.path || "/"
        const configuration: Config | undefined = vscode.workspace
          .getConfiguration()
          .get("quickOpenLazygit");

        const useITerm = vscode.workspace.getConfiguration().get("quickOpenLazygit.useiTerm") as boolean;

        if (configuration?.useITerm === true || useITerm) {
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
