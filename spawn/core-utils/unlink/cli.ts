import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("unlink", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("unlink", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("unlink", args, options);
}
