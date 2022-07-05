import { exec } from "node:child_process";

export function execShell(cmd: string) {
  return new Promise<string>((resolve, reject) => {
    exec(cmd, (err, out) => {
      if (err) {
        console.error(err);
      }
      return resolve(out);
    });
  });
}
