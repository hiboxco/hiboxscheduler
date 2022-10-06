"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../../index");
describe('api client', () => {
    it('is discoverable', () => {
        const client = new index_1.Client().crm.associations;
        expect(client.hasOwnProperty('batchApi')).toBeTruthy();
        expect(client.hasOwnProperty('typesApi')).toBeTruthy();
    });
});
//# sourceMappingURL=associations.spec.js.map