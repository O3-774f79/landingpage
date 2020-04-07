exports.ErrorHanding = error => {
    let response = {
        developerStatus: {
            code: "403000", description: message, from: "QuasarBackend"
        }
    }
    return response
}
