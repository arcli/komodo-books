import { expect, it, describe } from "@jest/globals";
import request from "supertest";
import { app } from "./app";

describe("GET /books/all", () => {
    it("should respond with status 200", async () => {
        const response = await request(app).get("/books/all");
        expect(response.status).toBe(200);
    });

    it("should contain books", async () => {
        const response = await request(app).get("/books/all");
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    title: expect.any(String),
                    isbn: expect.any(String),
                }),
            ]),
        );
    });

    // Add more tests for different route scenarios
});

/*


describe('GET /', () => {
  it('GET / => array of items', () => {
    return request(app)
      .get('/')

      .expect('Content-Type', /json/)

      .expect(200)

      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),

              name: expect.any(String),

              inStock: expect.any(Boolean),
            }),
          ])
        );
      });
  });

  it('GET / => items by ID', () => {
    return request(app)
      .get('/1')

      .expect('Content-Type', /json/)

      .expect(200)

      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(String),

            name: expect.any(String),

            inStock: expect.any(Boolean),
          })
        );
      });
  });

  it('GET /id => 404 if item not found', () => {
    return request(app).get('/10000000000').expect(404);
  });

  it('POST / => create NEW item', () => {
    return (
      request(app)
        .post('/')

        // Item send code

        .send({
          name: 'Xbox Series X',
        })

        .expect('Content-Type', /json/)

        .expect(201)

        .then((response) => {
          expect(response.body).toEqual(
            expect.objectContaining({
              name: 'Xbox Series X',

              inStock: false,
            })
          );
        })
    );
  });

  it('POST / => item name correct data type check', () => {
    return request(app).post('/').send({ name: 123456789 }).expect(400);
  });
});

 */
