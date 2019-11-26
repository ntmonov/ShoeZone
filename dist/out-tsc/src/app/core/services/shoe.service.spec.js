import { TestBed } from '@angular/core/testing';
import { ShoeService } from './shoe.service';
describe('ShoeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ShoeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=shoe.service.spec.js.map