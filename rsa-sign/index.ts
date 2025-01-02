export function getDescription() {
    return {
        description: "Rsa Sign.",
        input: [
            {
                id: "fileToSign",
                displayName: "Large file to be signed",
                description: "Large file to be signed.",
                type: "InputResource",
                required: true,
            },
            {
                id: "privateCertificate",
                displayName: "Private Certificate",
                description: "Private Certificate.",
                type: "Certificate",
                required: true,
            },
            {
                id: "rsaAlgorithmName",
                displayName: "Rsa Algorithm Name (RSASSA-PKCS1-v1_5, RSA-PSS)",
                description: "Rsa Algorithm Name (RSASSA-PKCS1-v1_5, RSA-PSS).",
                type: "String",
                defaultValue: "RSASSA-PKCS1-v1_5",
                required: true,
            },
            {
                id: "rsaHashAlgorithmName",
                displayName: "Rsa Hash Algorithm Name (SHA-1, SHA-256, SHA-384, SHA-512)",
                description: "Rsa Hash Algorithm Name (SHA-1, SHA-256, SHA-384, SHA-512).",
                type: "String",
                defaultValue: "SHA-256",
                required: true,
            },
            {
                id: "fileSignature",
                displayName: "Output file signature",
                description: "Contains the created signature (type Connector used because this files is written and read in this example).",
                type: "OutputResource",
                required: true,
            },
        ],
        output: [],
    } as const satisfies ScriptDescription;
}

export async function execute(context: Context): Promise<Output> {
    const fileToSign = context.getFile(context.parameters.fileToSign);
    const signatureBytes = await signContent(context, fileToSign);
    await writeBytes(context, context.parameters.fileSignature, signatureBytes);
}

async function signContent(context: Context, fileToSign: IFile): Promise<ArrayBuffer> {
    const algorithmParams = { name: context.parameters.rsaAlgorithmName, hash: context.parameters.rsaHashAlgorithmName };
    const keyUse = ["sign"];
    const privateKey = await crypto.subtle.importKey("pkcs8fromparameterinput", context.parameters.privateCertificate, algorithmParams, false, keyUse);

    return await crypto.subtle.sign(context.parameters.rsaAlgorithmName, privateKey, fileToSign);
}

async function writeBytes(context: Context, filePath: string, bytes: ArrayBuffer): Promise<void> {
    console.log("write: " + filePath);
    const fileWriteStream = await context.openWrite(filePath);

    const fileWriter = fileWriteStream.getWriter();
    await fileWriter.write(bytes);

    await fileWriter.close();
    fileWriter.releaseLock();
}
