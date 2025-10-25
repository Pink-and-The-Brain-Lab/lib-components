import { TestBed } from '@angular/core/testing';
import { LocalStorageManager } from './local-storage-manager';

describe('LocalStorageManager', () => {
  let service: LocalStorageManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should set value in local storage', () => {
    const spyLocalStorage = spyOn(window.localStorage, 'setItem');
    const spyStorageSub = spyOn(service['storageSub'], 'next');
    const mockValue = { value: 'value' };
    service.set<any>('name', mockValue);
    expect(spyLocalStorage).toHaveBeenCalledWith('#NAME', '{"value":"value"}');
    expect(spyStorageSub).toHaveBeenCalledWith('changed');
  });

  it('should try to get a value from localStorage and recieve null', () => {
    const spyLocalStorage = spyOn(window.localStorage, 'getItem');
    const value = service.get<any>('name');
    expect(spyLocalStorage).toHaveBeenCalledWith('#NAME');
    expect(value).toBeNull();
  });

  it('should get a value from localStorage', () => {
    const spyLocalStorage = spyOn(window.localStorage, 'getItem').and.returnValue('{"value":"value"}');
    const mockValue = { value: 'value' };
    const value = service.get<any>('name');
    expect(spyLocalStorage).toHaveBeenCalledWith('#NAME');
    expect(value).toEqual(mockValue);
  });

  it('should remove a register from localStorage', () => {
    const spyLocalStorage = spyOn(window.localStorage, 'removeItem');
    const spyStorageSub = spyOn(service['storageSub'], 'next');
    service.remove('name');
    service.watchStorage();
    expect(spyLocalStorage).toHaveBeenCalledWith('#NAME');
    expect(spyStorageSub).toHaveBeenCalledWith('changed');
  });
});
