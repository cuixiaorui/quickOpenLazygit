"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const execShell_1 = require("./execShell");
function activate(context) {
    const quickOpenLazygit = vscode.commands.registerCommand("extension.quickOpenLazygit", () => {
        try {
            const wf = vscode.workspace.workspaceFolders?.[0].uri.path || "/";
            const configuration = vscode.workspace
                .getConfiguration()
                .get("quickOpenLazygit");
            if (configuration?.useITerm === true) {
                (0, execShell_1.execShell)(`cd ${wf} && ttab -a iTerm2 lazygit`);
            }
            else {
                (0, execShell_1.execShell)(`cd ${wf} && ttab lazygit`);
            }
        }
        catch (error) {
            vscode.window.showErrorMessage(JSON.stringify(error));
        }
    });
    context.subscriptions.push(quickOpenLazygit);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map