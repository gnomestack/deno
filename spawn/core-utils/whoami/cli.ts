import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("whoami", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("whoami", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("whoami", args, options);
}
