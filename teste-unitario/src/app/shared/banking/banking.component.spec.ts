import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investiments/components/list/list.component';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPoupanca should poupanca have 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });
  it('getcarteira should carteira have 50', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('setSacar', () => {
    const res = component.setSacar('5');
    expect(res).toEqual(55);
    expect(component.getPoupanca).toEqual(5);
    expect(component.getCarteira).toEqual(55);
  });
  it('setSacar com valor invalido', () => {
    const res = component.setSacar('20');
    expect(res).toEqual(undefined);
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });
  it('setDepositar', () => {
    const res = component.setDepositar('5');
    expect(res).toEqual(15);
    expect(component.getPoupanca).toEqual(15);
    expect(component.getCarteira).toEqual(45);
  });
  it('setDepositar com valor invalido', () => {
    const res = component.setDepositar('200');
    expect(res).toEqual(undefined);
  });

  it('setDepositar interface', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');

    expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);
  });
});
