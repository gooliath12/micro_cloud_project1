import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places = [
      { id: '11111',  country: 'aaa',  company: 'bbb' },
      { id: '22222',  country: 'ccc',  company: 'ggg' },
      { id: '33333',  country: 'ddd',  company: 'hhh' },
      { id: '44444',  country: 'eee',  company: 'iii' },
      { id: '55555',  country: 'fff',  company: 'jjj' },
    ];
    return {places};
  }
}