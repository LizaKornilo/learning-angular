import { faker } from '@faker-js/faker';
import {IStatus} from "./model/i-status";
import {ITodosByStatus} from "./model/i-todos-by-statuses";

export const STATUSES: IStatus[] = [
  { id: 1, name: 'Todo' },
  { id: 2, name: 'In progress' },
  { id: 3, name: 'Ready for review' },
  { id: 4, name: 'Done' },
]

export const TODOS_BY_STATUSES: ITodosByStatus[] = STATUSES.map((status) => {
  return {
    ...status,
    todos: Array(Number(faker.random.numeric(2)))
      .fill('')
      .map((item, index)=>({
        id: index + 1,
        title: faker.lorem.sentences(1),
      }))
  }
})
