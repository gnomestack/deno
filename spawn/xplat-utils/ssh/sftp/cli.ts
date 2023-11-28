import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../../core/mod.ts";

registerExe("sftp", {
    windows: [
        "%ProgramFiles%\\OpenSSH\\sftp.exe",
    ],
});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("sftp", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("sftp", args, options);
}
