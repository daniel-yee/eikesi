/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { DemoHybridGatewayTestModule } from '../../../test.module';
import { DemoEDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/demo-e/demo-e-delete-dialog.component';
import { DemoEService } from '../../../../../../main/webapp/app/entities/demo-e/demo-e.service';

describe('Component Tests', () => {

    describe('DemoE Management Delete Component', () => {
        let comp: DemoEDeleteDialogComponent;
        let fixture: ComponentFixture<DemoEDeleteDialogComponent>;
        let service: DemoEService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [DemoHybridGatewayTestModule],
                declarations: [DemoEDeleteDialogComponent],
                providers: [
                    DemoEService
                ]
            })
            .overrideTemplate(DemoEDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(DemoEDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(DemoEService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
