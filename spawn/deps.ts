import { capture, captureSync, exec, execSync, ps } from "https://x.nest.land/gs-std@0.0.1/ps/mod.ts";

export const shell = {
    capture,
    captureSync,
    ps,
    exec,
    execSync,
};
export {
    chmod,
    chmodSync,
    ensureDirectory,
    ensureDirectorySync,
    ensureFile,
    ensureFileSync,
    exists,
    existsSync,
    isDirectory,
    isDirectorySync,
    makeTempFile,
    makeTempFileSync,
    readTextFile,
    readTextFileSync,
    rm,
    rmSync,
    writeTextFile,
    writeTextFileSync,
} from "https://x.nest.land/gs-std@0.0.1/fs/mod.ts";
export {
    chdir,
    cwd,
    exec,
    execSync,
    findExe,
    findExeSync,
    getEntry,
    registerExe,
    splat,
    splitArguments,
    which,
    whichSync,
} from "https://x.nest.land/gs-std@0.0.1/ps/mod.ts";

export {
    ArgumentError,
    NotFoundOnPathError,
    PlatformNotSupportedError,
} from "https://x.nest.land/gs-std@0.0.1/errors/mod.ts";

export {
    basename,
    basenameWithoutExtension,
    dirname,
    join,
    resolve,
} from "https://x.nest.land/gs-std@0.0.1/path/mod.ts";
export { homeConfigDir, homeDataDir } from "https://x.nest.land/gs-std@0.0.1/path/os.ts";
export { isCi } from "https://x.nest.land/gs-std@0.0.1/ci/mod.ts";
export {
    expand,
    get,
    getOrDefault,
    getRequired,
    homeDir,
    IS_DARWIN,
    IS_WINDOWS,
    NEW_LINE,
    set,
} from "https://x.nest.land/gs-std@0.0.1/os/mod.ts";
export type {
    ExecArgs,
    IExecOptions,
    IExecSyncOptions,
    ISplatOptions,
    PsOutput,
} from "https://x.nest.land/gs-std@0.0.1/ps/mod.ts";
