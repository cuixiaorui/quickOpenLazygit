"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const execShell_1 = require("./execShell");
function activate(context) {
    const quickOpenLazygit = vscode.commands.registerCommand("extension.quickOpenLazygit", () => {
        const configuration = vscode.workspace
            .getConfiguration()
            .get("quickOpenLazygit");
        if (configuration?.useITerm === true) {
            (0, execShell_1.execShell)("ttab -a iTerm2 lazygit");
        }
        else {
            (0, execShell_1.execShell)("ttab lazygit");
        }
    });
    context.subscriptions.push(quickOpenLazygit);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map