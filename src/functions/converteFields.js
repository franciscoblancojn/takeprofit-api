const converteFields = (fields, data) => {
    fields.forEach((field) => {
        if (data[field.id]) {
            data[field.id] = field.converte(data[field.id]);
        }
    });
    return data;
};
module.exports = converteFields;
