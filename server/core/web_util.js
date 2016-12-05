function sendError(res, err) {
    console.error('Something broke!', err);
    res.status(500).send('Something broke!');
}
exports.sendError = sendError;
