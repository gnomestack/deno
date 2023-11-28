import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("ssh", {
    windows: [
        "%ProgramFiles%\\OpenSSH\\ssh.exe",
    ],
});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("ssh", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("ssh", args, options);
}
