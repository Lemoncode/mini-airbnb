import * as model from "dals";
import * as apiModel from "./house.api-model";
import { mapListHouseFromApiToModel } from "./house.mappers";

describe("pods/book/book.mappers spec", () => {
  describe("mapListHouseFromApiToModel", () => {
    it("should return empty array when it feeds House equals undefined", () => {
      // Arrange
      const houseList: apiModel.House[] = undefined;

      // Act
      const result: model.House[] = mapListHouseFromApiToModel(houseList);

      // Assert
      expect(result).toEqual([]);
    });
  });

  it("should return empty array when it feeds House equals null", () => {
    // Arrange
    const houseList: apiModel.House[] = null;

    // Act
    const result: model.House[] = mapListHouseFromApiToModel(houseList);

    // Assert
    expect(result).toEqual([]);
  });

  it("should return empty array when it feeds House equals null", () => {
    // Arrange
    const houseList: apiModel.House[] = null;

    // Act
    const result: model.House[] = mapListHouseFromApiToModel(houseList);

    // Assert
    expect(result).toEqual([]);
  });
  it("should return empty array when it feeds House equals empty array", () => {
    // Arrange
    const houseList: apiModel.House[] = [];

    // Act
    const result: model.House[] = mapListHouseFromApiToModel(houseList);

    // Assert
    expect(result).toEqual([]);
  });
  it("should return one mapped item in array when it feeds houseList with one item", () => {
    // Arrange
    const houseList: apiModel.House[] = [
      {
        id: "10558807",
        name: "test-name",
        summary: "test-summary",
        image: "test-image",
        country: "test-country",
        street: "test-street",
        market: "test-market",
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        reviews: [
          {
            id: "",
            reviewer_name: "test-reviewer-name",
            date: "",
            comments: "test-comments",
          },
        ],
      },
    ];

    // Act
    const result: model.House[] = mapListHouseFromApiToModel(houseList);

    // Assert
    expect(result).toEqual([
      {
        _id: "10558807",
        name: "test-name",
        summary: "test-summary",
        images: {
          picture_url: "test-image",
        },
        address: {
          country: "test-country",
          street: "test-street",
          market: "test-market",
        },
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        reviews: [
          {
            _id: Date.now().toString(),
            reviewer_name: "test-reviewer-name",
            date: new Date(),
            comments: "test-comments",
          },
        ],
      },
    ]);
  });
});
