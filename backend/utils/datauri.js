// Builds a base64 data URI from a multer in-memory file.
// Replaces the `datauri` package, which pulled in a vulnerable `image-size`.
const getDataUri = (file) => {
    const mimetype = file.mimetype || "application/octet-stream";
    const base64 = Buffer.from(file.buffer).toString("base64");
    return {
        mimetype,
        base64,
        content: `data:${mimetype};base64,${base64}`,
    };
};

export default getDataUri;
