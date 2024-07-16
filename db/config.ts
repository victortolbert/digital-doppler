import { defineTable, column } from 'astro:db';

const Comment = defineTable({
  columns: {
    authorId: column.number(),
    published: column.date(),
    body: column.text(),
  },
  indexes: [
    { on: ["authorId", "published"], unique: true },
  ]
});
