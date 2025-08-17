import request from 'supertest';
import { app } from '../index';

describe('Backend API Tests', () => {
  describe('Health Check', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.status).toBe('OK');
    });
  });

  describe('Profiles API', () => {
    it('should get available profiles', async () => {
      const response = await request(app)
        .get('/api/profiles')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      
      const profile = response.body[0];
      expect(profile).toHaveProperty('id');
      expect(profile).toHaveProperty('name');
      expect(profile).toHaveProperty('age');
      expect(profile).toHaveProperty('isMatch');
    });
  });

  describe('Matches API', () => {
    it('should like a profile', async () => {
      const response = await request(app)
        .post('/api/matches/like')
        .set('x-user-id', 'test-user')
        .send({ profileId: '1' })
        .expect(200);

      expect(response.body.status).toBe('ok');
      expect(response.body).toHaveProperty('isMatch');
    });

    it('should dislike a profile', async () => {
      const response = await request(app)
        .post('/api/matches/dislike')
        .set('x-user-id', 'test-user')
        .send({ profileId: '3' })
        .expect(200);

      expect(response.body.status).toBe('ok');
    });

    it('should require user-id header for like', async () => {
      await request(app)
        .post('/api/matches/like')
        .send({ profileId: '1' })
        .expect(400);
    });

    it('should require user-id header for dislike', async () => {
      await request(app)
        .post('/api/matches/dislike')
        .send({ profileId: '1' })
        .expect(400);
    });
  });

  describe('Mock Data Validation', () => {
    it('should have profiles with isMatch property', async () => {
      const response = await request(app)
        .get('/api/profiles')
        .expect(200);

      const matchedProfiles = response.body.filter((p: any) => p.isMatch === true);
      const unmatchedProfiles = response.body.filter((p: any) => p.isMatch === false);

      expect(matchedProfiles.length).toBe(8);
      expect(unmatchedProfiles.length).toBe(12);
      expect(response.body.length).toBe(20);
    });
  });
});
