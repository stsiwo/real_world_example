// normalize state 
// structure: 
//   entities: 
//     users: id=login  
//     repos: id=login/name
//   paginate: 
//     starredRepo: [users]
//     stargazers: [repos]
import { schema } from "normalizr"

export const user = new schema.Entity("users", {}, {
  idAttribute: user => user.login
})

export const repo = new schema.Entity("repos", {
  owner: user
}, {
  idAttribute: repo => repo.fullName
}) 

export const starredRepo = new schema.Array(repo)

export const stargazers = new schema.Array(user)