function dateFormat(timestamp) {
    // Use the `Intl` object to format the date
    return Intl.DateTimeFormat('en-US').format(timestamp);
}

module.exports = dateFormat;