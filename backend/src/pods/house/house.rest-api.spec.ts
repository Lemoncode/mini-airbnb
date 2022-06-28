import supertest from 'supertest';
import { createRestApiServer } from 'core/servers';
import { houseApi } from './house.rest-api';

const app = createRestApiServer();
app.use(houseApi);

describe('pods/house/house.rest-api specs', () => {
  describe('get house list', () => {
    it('should return the whole houseList with values when it request "/" endpoint without query params', async () => {
      // Arrange
      const route = '/';

      // Act
      const response = await supertest(app).get(route);

      // Assert
      expect(response.statusCode).toEqual(200);
      expect(response.body).toHaveLength(7);
    });
    it('should return the whole reviewList with values when it request "/1/reviews" with house id 1', async () => {
      // Arrange
      const route = '/1/reviews';
      // Act
      const response = await supertest(app).get(route);
      // Assert
      expect(response.statusCode).toEqual(200);
      expect(response.body).toHaveLength(2);
    });
  });
});
