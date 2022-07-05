"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execShell = void 0;
const node_child_process_1 = require("node:child_process");
function execShell(cmd) {
    return new Promise((resolve, reject) => {
        (0, node_child_process_1.exec)(cmd, (err, out) => {
            if (err) {
                console.error(err);
            }
            return resolve(out);
        });
    });
}
exports.execShell = execShell;
//# sourceMappingURL=execShell.js.map