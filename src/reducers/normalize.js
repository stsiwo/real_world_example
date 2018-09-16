// normalize state 
// structure: 
//   entities: 
//     users: id=login  
//     repos: id=login/name
//   paginate: 
//     starredRepo: [users]
//     stargazers: [repos]
import { schema } from "normalizer"

export const user = schema.Entity("users", {}, {
  idAttribute: user => user.login
})

export const repo = schema.Entity("repos", {}, {
  idAttribute: repo => repo.fullName
}) 

export const starredRepo = schema.Array(repo)

export const stargazers = schema.Array(user)