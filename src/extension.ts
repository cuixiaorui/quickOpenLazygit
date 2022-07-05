import * as vscode from "vscode";
import { execShell } from "./execShell";
import * as path from "path";

interface Config {
  useITerm: boolean;
}

export function activate(context: vscode.ExtensionContext) {
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
          execShell(`cd ${wf} ttab lazygit`);
        }
      } catch (error) {
        vscode.window.showErrorMessage(JSON.stringify(error));
      }
    }
  );

  context.subscriptions.push(quickOpenLazygit);
}
