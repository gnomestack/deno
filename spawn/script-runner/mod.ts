import { scriptRunner as runner } from "../core/script-runner.ts";
import * as bash from "../bash/cli.ts";

import * as sh from "../sh/cli.ts";
import * as pwsh from "../pwsh/cli.ts";
import * as powershell from "../powershell/cli.ts";
import * as deno from "../deno/cli.ts";
import * as node from "../node/cli.ts";
import * as python from "../python/cli.ts";
import * as ruby from "../ruby/cli.ts";

runner.register("bash", {
    runScript: bash.runScript,
    runScriptSync: bash.runScriptSync,
    runFile: bash.runFile,
    runFileSync: bash.runFileSync,
});

runner.register("sh", {
    runScript: sh.runScript,
    runScriptSync: sh.runScriptSync,
    runFile: sh.runFile,
    runFileSync: sh.runFileSync,
});

runner.register("pwsh", {
    runScript: pwsh.runScript,
    runScriptSync: pwsh.runScriptSync,
    runFile: pwsh.runFile,
    runFileSync: pwsh.runFileSync,
});

runner.register("powershell", {
    runScript: powershell.runScript,
    runScriptSync: powershell.runScriptSync,
    runFile: powershell.runFile,
    runFileSync: powershell.runFileSync,
});

runner.register("deno", {
    runScript: deno.runScript,
    runScriptSync: deno.runScriptSync,
    runFile: deno.runFile,
    runFileSync: deno.runFileSync,
});

runner.register("node", {
    runScript: node.runScript,
    runScriptSync: node.runScriptSync,
    runFile: node.runFile,
    runFileSync: node.runFileSync,
});

runner.register("python", {
    runScript: python.runScript,
    runScriptSync: python.runScriptSync,
    runFile: python.runFile,
    runFileSync: python.runFileSync,
});

runner.register("ruby", {
    runScript: ruby.runScript,
    runScriptSync: ruby.runScriptSync,
    runFile: ruby.runFile,
    runFileSync: ruby.runFileSync,
});

export const scriptRunner = runner;
