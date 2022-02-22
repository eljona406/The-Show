import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ShowInfoService } from './show-info.service';

describe('ShowInfoService', () => {
  let showInfoService : ShowInfoService ;
  let mockHttp: HttpClient;
beforeEach(() => {
  mockHttp = jasmine.createSpyObj('mockHttp',['get'])
  let showInfoService = new ShowInfoService(mockHttp);
 });

});
