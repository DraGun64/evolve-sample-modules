export function getDescription() {
    return {
        description: "Hello World.",
        input: [],
        output: [],
    } as const satisfies ScriptDescription;
}

export async function execute(context: Context): Promise<Output> {
    console.log(`Hello World from ${context.environment.productionType} production!`);
}
