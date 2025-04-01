export function getDescription() {
    return {
        description: "HttpCaller",
        input: [
            {
                id: "get",
                displayName: "URL GET",
                description: "URL to call - method GET",
                type: "InputResource",
            },
            {
                id: "post",
                displayName: "URL POST",
                description: "URL to call - method POST",
                type: "OutputResource",
            },
        ],
        output: [],
    } as const satisfies ScriptDescription;
}

export async function execute(context) {
    // METHOD GET
    console.log("✅ URL GET: " + context.parameters.get);

    const getEndpoint = context.parameters.get;
    const getResponse = await fetch(getEndpoint);
    const getJson = await getResponse.json();
    console.debug(getJson);

    // METHOD POST
    console.log("✅ URL POST: " + context.parameters.post);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    const body = `{ "id": 78912 }`;

    const requestOptions = {
        headers: headers,
        method: "POST",
        body: body,
    };

    const postEndpoint = context.parameters.post;
    const postResponse = await fetch(postEndpoint, requestOptions);
    const postJson = await postResponse.json();
    console.debug(postJson);
}