import { isNeedFetch } from "./REQUEST_DATA"

test("test data has both endpoint and ILMR property, so return true", () => {
  const data = {
    endpoint: "endpoint", 
    isLoadMoreRequest: true,
    isCached: () => true 
  }
  expect(isNeedFetch(data)).toBe(true)
})

test("test data does not have ILMR property and isCached return true, so test return false", () => {
  const data = {
    endpoint: "endpoint", 
    isCached: () => true 
  }
  expect(isNeedFetch(data)).toBe(false)
})

test("test data does not have endpoint and isCached return true, so test should return false", () => {
  const data = {
    isLoadMoreRequest: true,
    isCached: () => true 
  }
  expect(isNeedFetch(data)).toBe(false)
})

test("test data only has only isCached property and it returns false, so test should return true", () => {
  const data = {
    isCached: () => false 
  }
  expect(isNeedFetch(data)).toBe(true)
})

test("mock user or repo request data, so test should return false", () => {
  const data = {
    isCached: () => true 
  }
  expect(isNeedFetch(data)).toBe(false)
})