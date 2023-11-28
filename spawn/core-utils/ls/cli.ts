import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("ls", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("ls", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("ls", args, options);
}
