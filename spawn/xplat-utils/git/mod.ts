import { cli, cliSync } from "./cli.ts";
import { IExecOptions, IExecSyncOptions, ISplatOptions, splat } from "../../core/mod.ts";

export function git(args: string[] | Record<string, unknown>, options?: IExecOptions) {
    if (Array.isArray(args)) {
        return cli(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cli(splat(args, o), options);
}

export function gitSync(args: string[] | Record<string, unknown>, options?: IExecSyncOptions) {
    if (Array.isArray(args)) {
        return cliSync(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cliSync(splat(args, o), options);
}

/**
 * Gets the commit hash for the current HEAD
 * @param options The execution options
 * @returns The sha commit hash.
 */
export async function sha(options?: Omit<IExecOptions, "stdout" | "stderr">) {
    const o: IExecOptions = {
        ...options,
        stdout: "piped",
        stderr: "piped",
    };

    const r = await git(["rev-parse", "HEAD"], o);
    r.throwOrContinue();
    return r.stdoutText.trimEnd();
}

export function shaSync(options?: Omit<IExecSyncOptions, "stdout" | "stderr">) {
    const o: IExecOptions = {
        ...options,
        stdout: "piped",
        stderr: "piped",
    };

    const r = gitSync(["rev-parse", "HEAD"], o);
    return r.throwOrContinue()
        .stdoutText.trimEnd();
}

/**
 * Gets the current git ref e.g. the full branch name
 *
 * @param options The execution options
 * @returns The name of git reference
 */
export async function ref(options?: Omit<IExecOptions, "stdout" | "stderr">) {
    const o: IExecOptions = {
        ...options,
        stdout: "piped",
        stderr: "piped",
    };

    const r = await git(["rev-parse", "--symbolic-full-name", "HEAD"], o);
    r.throwOrContinue();
    return r.stdoutText.trimEnd();
}

/**
 * Gets the current git ref e.g. the full branch name
 *
 * @param options The execution options
 * @returns The name of git reference
 */
export function refSync(options?: Omit<IExecOptions, "stdout" | "stderr">) {
    const o: IExecOptions = {
        ...options,
        stdout: "piped",
        stderr: "piped",
    };

    const r = gitSync(["rev-parse", "--symbolic-full-name", "HEAD"], o);
    r.throwOrContinue();
    return r.stdoutText.trimEnd();
}

/**
 * Gets the current ref name e.g. branch or tag name
 *
 * @param options the execution options.
 * @throws Error when exit code is not 0
 */
export async function refName(options?: Omit<IExecOptions, "stdout" | "stderr">) {
    const o: IExecOptions = {
        ...options,
        stdout: "piped",
        stderr: "piped",
    };

    const r = await git(["rev-parse", "--abbrev-ref", "HEAD"], o);
    r.throwOrContinue();
    return r.stdoutText.trimEnd();
}

/**
 * Gets the current ref name e.g. branch or tag name
 *
 * @param options the execution options.
 * @throws Error when exit code is not 0
 */
export function refNameSync(options?: Omit<IExecOptions, "stdout" | "stderr">) {
    const o: IExecOptions = {
        ...options,
        stdout: "piped",
        stderr: "piped",
    };

    const r = gitSync(["rev-parse", "--abbrev-ref", "HEAD"], o);
    r.throwOrContinue();
    return r.stdoutText.trimEnd();
}
