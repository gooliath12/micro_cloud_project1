"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var places = [
            { id: '11111', country: 'aaa', company: 'bbb' },
            { id: '22222', country: 'ccc', company: 'ggg' },
            { id: '33333', country: 'ddd', company: 'hhh' },
            { id: '44444', country: 'eee', company: 'iii' },
            { id: '55555', country: 'fff', company: 'jjj' },
        ];
        return { places: places };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map