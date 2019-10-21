var ShareData = {
    dataSet: {},
    addDataSet(id, dataSet) {
        ShareData.dataSet[id] = dataSet;
    }
};
module.exports = ShareData;