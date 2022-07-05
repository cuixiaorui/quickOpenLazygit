import * as vscode from "vscode";
import { execShell } from "./execShell";

interface Config {
  useITerm: boolean;
}

export function activate(context: vscode.ExtensionContext) {
  const quickOpenLazygit = vscode.commands.registerCommand(
    "extension.quickOpenLazygit",
    () => {
      const configuration: Config | undefined = vscode.workspace
        .getConfiguration()
        .get("quickOpenLazygit");
      if (configuration?.useITerm === true) {
        execShell("ttab -a iTerm2 lazygit");
      } else {
        execShell("ttab lazygit");
      }
    }
  );

  context.subscriptions.push(quickOpenLazygit);
}
