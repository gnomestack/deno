import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../../core/mod.ts";

registerExe("scp", {
    windows: [
        "%ProgramFiles%\\OpenSSH\\scp.exe",
    ],
});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("scp", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("scp", args, options);
}
