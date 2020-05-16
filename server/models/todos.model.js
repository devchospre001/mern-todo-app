const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todosSchema = new Schema(
  {
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
