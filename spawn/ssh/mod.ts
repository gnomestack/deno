import { cli, cliSync } from "./cli.ts";
import { IExecOptions, IExecSyncOptions } from "../core/mod.ts";

export function ssh(args: string[], options?: IExecOptions) {
    return cli(args, options);
}

export function sshSync(args: string[], options?: IExecSyncOptions) {
    return cliSync(args, options);
}
